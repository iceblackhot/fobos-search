import {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {
  AppContextInterface,
  OptionList,
  Task,
  StreetOptionList,
  TaskHistory,
} from '../../@types/ftypes';
import sha256 from 'sha256';
import bcryptjs from 'bcryptjs';

export const INITIAL_STATE_FORM = {
  id: 0,
  addDate: null,
  planDate: '',
  fname: '',
  lname: '',
  patronymic: '',
  mobile: '',
  cityName: '',
  cityId: 0,
  streetName: '',
  streetId: 0,
  workerName: '',
  workerId: 0,
  apartment: '',
  building: '',
  entrance: '',
  floor: '',
  section: '',
  comment: '',
  statusName: '',
  connTypeId: 0,
  statusId: 0,
  type: 1,
  priority: 1,
  taskDone: 0,
};

export const AppContext = createContext<AppContextInterface>({
  isAuthenticated: false,
  filterCity: [],
  filterCityList: [],
  filterStreet: [],
  filterStreetList: [],
  filterStatus: [],
  filterStatusList: [],
  filterWorker: [],
  filterWorkerList: [],
  filterText: '',
  filterDateStart: null,
  filterDateEnd: null,
  filterTaskDone: null,
  filterTaskType: null,
  taskList: [],
  pageRows: 10,
  currentPage: 0,
  taskTotal: 0,
  taskId: 0,
  connTypeId: 0,
  formData: INITIAL_STATE_FORM,
  showModal: false,
  showPreloader: false,
  showFilters: false,
  error: null,
  calendarCrutch: false,
  calendar: null,

  setAutenticated: () => {},
  saveTask: () => 0,
  loadHistory: () => {},
  checkAuth: () => {},
  setFilterCity: () => {},
  setFilterCityList: () => {},
  setFilterStreet: () => {},
  setFilterStreetList: () => {},
  setFilterStatus: () => {},
  setFilterStatusList: () => {},
  setFilterWorker: () => {},
  setFilterWorkerList: () => {},
  setFilterText: () => {},
  setFilterDateStart: () => {},
  setFilterDateEnd: () => {},
  setFilterTaskDone: () => {},
  setFilterTaskType: () => {},
  setTaskList: () => {},
  setPageRows: () => {},
  setCurrentPage: () => {},
  setTaskTotal: () => {},
  setTaskId: () => {},
  setConnTypeId: () => {},
  setFormData: () => {},
  setShowModal: () => {},
  setShowPreloader: () => {},
  setShowFilters: () => {},
  setError: () => {},

  setAppCookieToken: () => {},
  setAppCookieDark: () => {},
  getAppCookie: () => {
    return {token: '', isDark: false};
  },
});

type Props = {
  children: React.ReactNode | JSX.Element;
};

interface Action {
  type: string;
  field: string;
  payload: string;
  task: Task;
}

export const useAppContext = () => useContext(AppContext);

const reducer = (state: Task, action: Action): Task => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'EDIT': {
      return action.task;
    }
    case 'RESET': {
      return INITIAL_STATE_FORM;
    }
    default:
      return state;
  }
};

const AppContextProvider: React.FC<Props> = ({children}) => {
  const [isAuthenticated, setAutenticated] = useState<boolean>(false);
  const [filterCity, setFilterCity] = useState<Array<string>>([]);
  const [filterCityList, setFilterCityList] = useState<Array<OptionList>>([]);
  const [filterStreet, setFilterStreet] = useState<Array<string>>([]);
  const [filterStreetList, setFilterStreetList] = useState<Array<StreetOptionList>>([]);
  const [filterStatus, setFilterStatus] = useState<Array<string>>([]);
  const [filterStatusList, setFilterStatusList] = useState<Array<OptionList>>([]);
  const [filterWorker, setFilterWorker] = useState<Array<string>>([]);
  const [filterWorkerList, setFilterWorkerList] = useState<Array<OptionList>>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [filterDateStart, setFilterDateStart] = useState<null | Date>(null);
  const [filterDateEnd, setFilterDateEnd] = useState<null | Date>(null);

  const [filterTaskDone, setFilterTaskDone] = useState<null | number>(0);
  const [filterTaskType, setFilterTaskType] = useState<null | number>(1);

  const [taskList, setTaskList] = useState<Array<Task>>([]);

  const [pageRows, setPageRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [taskTotal, setTaskTotal] = useState(0);
  const [connTypeId, setConnTypeId] = useState<number>(0);

  const [taskId, setTaskId] = useState<number>(0);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPreloader, setShowPreloader] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [formData, setFormData] = useReducer(reducer, INITIAL_STATE_FORM);

  const [error, setError] = useState<string | null>(null);

  let calendarCrutch = false;
  let calendar = null;

  function getAppCookie() {
    if (document.cookie === '') {
      return {token: '', isDark: false};
    }
    return JSON.parse(document.cookie);
  }

  function setAppCookieToken(token: string) {
    let cookie = getAppCookie();
    cookie.token = token;
    document.cookie = JSON.stringify(cookie);
  }

  function setAppCookieDark(isDark: boolean) {
    let cookie = getAppCookie();
    cookie.isDark = isDark;
    document.cookie = JSON.stringify(cookie);
  }

  console.log(taskList);

  async function checkAuth(login: string, password: string, logout: boolean) {
    if (logout) setAppCookieToken('');

    const pwd = sha256(password);
    const hashPwd = bcryptjs.hashSync(pwd, 12);

    const checkAuth: string = process.env.REACT_APP_CHECK_AUTH as string;
    await fetch(checkAuth, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        email: login,
        password: hashPwd,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.status === 200) {
            console.log(result.values);
            // let id = result.values.id;
            // let email = result.values.email;
            let token = result.values.token;
            setAppCookieToken(token);
            setAutenticated(true);
          } else {
            setAutenticated(false);
            setAppCookieToken('');
          }
        },
        (error) => {
          setError(error);
        },
      );
  }

  function loadHistory(id: number, callback: (param: Array<TaskHistory>) => void) {
    async function _loadHistory(id: number, callback: (param: Array<TaskHistory>) => void) {
      let cookie = getAppCookie();
      const history: string = process.env.REACT_APP_HISTORY as string;
      const data = await fetch(history, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookie.token,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          task: {id},
        }),
      });

      if (data) {
        const json = await data.json();

        if (json) {
          // TODO: Show error window
          //if (json.result !== 0) setError(json.error_msg);
          //else {
          callback(json);
          //}
        }
      }
    }
    _loadHistory(id, callback);
  }

  function saveTask() {
    async function _saveTask() {
      let cookie = getAppCookie();
      const monolithSave: string = process.env.REACT_APP_MONOLITH_SAVE as string;
      const data = await fetch(monolithSave, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookie.token,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          task: formData,
        }),
      });

      if (data) {
        const json = await data.json();
        setError('Заявка успішно збережена!');
        if (json) {
          // TODO: Show error window
          if (json.result !== 0) setError(json.error_msg);
          else setShowModal(false);
          setShowPreloader(true);
          fetchData();
        }
      }
    }
    // console.log('POST FORM PHONE ' + formData.mobile);
    if (!formData.mobile.match(/^(\d{10,10})$/)) {
      setError('Вкажіть телефон!');
      return -1;
    }
    if (formData.lname.length < 3) {
      setError('Вкажіть призвище!');
      return -2;
    }
    if (formData.fname.length < 3) {
      setError('Вкажіть імя!');
      return -3;
    }
    if (formData.cityId === 0) {
      setError('Потрібно обрати місто!');
      return -4;
    }
    _saveTask();
    return 0;
  }

  async function fetchData() {
    let cookie = getAppCookie();
    const monolith: string = process.env.REACT_APP_MONOLITH as string;
    const data = await fetch(monolith, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: cookie.token,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        citySelectedList: filterCity,
        streetSelectedList: filterStreet,
        statusSelectedList: filterStatus,
        workerSelectedList: filterWorker,
        searchText: filterText,
        plannedDateFrom: filterDateStart ? filterDateStart.toJSON() : null,
        plannedDateTo: filterDateEnd ? filterDateEnd.toJSON() : null,
        taskDone: filterTaskDone,
        type: filterTaskType,
        currentPage: currentPage,
        pageRows: pageRows,
        connTypeId: connTypeId,
      }),
    });

    if (data) {
      if (data.status === 200) {
        setAutenticated(true);
        const json = await data.json();

        if (json) {
          setFilterCityList(json.cityList);
          setFilterStreetList(json.streetList);
          setFilterStatusList(json.statusList);
          setFilterWorkerList(json.workerList);
          if (json.taskList != null) setTaskList(json.taskList);
          setTaskTotal(json.taskTotal);
          // console.log('TOKEN ' + json.token);
          if (json.token != null) {
            setAppCookieToken(json.token);
          }
        }
      } else if (data.status === 401) {
        setAutenticated(false);
        setAppCookieToken('');
      } else {
        // TODO: Show error
        // setError(data.error_msg);
      }
    }
    setShowPreloader(false);
  }

  useEffect(() => {
    setShowPreloader(true);
    fetchData();
  }, [
    filterCity,
    filterStreet,
    filterStatus,
    filterWorker,
    filterText,
    filterDateStart,
    filterDateEnd,
    filterTaskDone,
    filterTaskType,
    connTypeId,
    pageRows,
    currentPage,
    isAuthenticated,
  ]);

  // console.log('done - ' + filterTaskDone);
  // console.log('done - ' + filterTaskType);
  // console.log(taskId);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        filterCity,
        filterCityList,
        filterStreet,
        filterStreetList,
        filterStatus,
        filterStatusList,
        filterWorker,
        filterWorkerList,
        filterText,
        filterDateStart,
        filterDateEnd,
        filterTaskDone,
        filterTaskType,
        taskList,
        pageRows,
        currentPage,
        taskTotal,
        taskId,
        connTypeId,
        formData,
        showModal,
        showPreloader,
        showFilters,
        error,
        calendarCrutch,
        calendar,
        setAutenticated,
        checkAuth,
        saveTask,
        loadHistory,
        setFilterCity,
        setFilterCityList,
        setFilterStreet,
        setFilterStreetList,
        setFilterStatus,
        setFilterStatusList,
        setFilterWorker,
        setFilterWorkerList,
        setFilterText,
        setFilterDateStart,
        setFilterDateEnd,
        setFilterTaskDone,
        setFilterTaskType,
        setTaskList,
        setPageRows,
        setCurrentPage,
        setTaskTotal,
        setTaskId,
        setConnTypeId,
        setFormData,
        setShowModal,
        setShowPreloader,
        setShowFilters,
        setAppCookieToken,
        setAppCookieDark,
        getAppCookie,
        setError,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
