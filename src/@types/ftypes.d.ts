import {Dispatch, ReactNode, SetStateAction} from 'react';
import {DatePicker} from 'flatpickr';

export type WrapperProps = {
  className?: string;
  children: ReactNode;
};

export type OptionList = {
  id: number;
  name: string;
  total: number;
};

export type StreetOptionList = {
  cityId: number;
  id: number;
  name: string;
  total: number;
};

export enum TaskPriority {
  NONE = 0,
  NORMAL,
  HIGH,
  CRITICAL,
}

export enum TaskType {
  NEW_CONN = 1,
  FUCK,
}

export type Task = {
  id: number;
  addDate: Date | null;
  planDate: string;
  fname: string;
  lname: string;
  patronymic: string;
  mobile: string;
  cityName: string;
  cityId: number;
  streetName: string;
  streetId: number;
  workerName: string;
  workerId: number;
  apartment: string;
  building: string;
  entrance: string;
  floor: string;
  section: string;
  priority: TaskPriority;
  comment: string;
  type: number;
  statusName: string;
  connTypeId: number;
  statusId: number;
  taskDone: number;
};

export interface TaskHistory {
  date: string;
  changes: string;
  login: string;
}

export interface AppContextInterface {
  isAuthenticated: boolean;
  filterCity: Array<string>;
  filterCityList: Array<OptionList>;
  filterStreet: Array<string>;
  filterStreetList: Array<StreetOptionList>;
  filterStatus: Array<string>;
  filterStatusList: Array<OptionList>;
  filterWorker: Array<string>;
  filterWorkerList: Array<OptionList>;
  filterText: string;
  filterDateStart: null | Date;
  filterDateEnd: null | Date;
  filterTaskDone: null | number;
  filterTaskType: null | number;
  taskList: Array<Task>;
  pageRows: number;
  currentPage: number;
  taskTotal: number;
  taskId: number;
  connTypeId: number;
  formData: Task;
  showModal: boolean;
  showPreloader: boolean;
  showFilters: boolean;
  error: null | string;
  calendarCrutch: boolean;
  calendar: DatePicker | null;

  setAutenticated: Dispatch<SetStateAction<boolean>>;
  saveTask: () => number;
  loadHistory: (id: number, callback: (param: Array<TaskHistory>) => void) => void;
  checkAuth: (login: string, password: string, logout: boolean) => void;
  setFilterCity: (list: Array<string>) => void;
  setFilterCityList: Dispatch<SetStateAction<Array<OptionList>>>;
  setFilterStreet: Dispatch<SetStateAction<Array<string>>>;
  setFilterStreetList: Dispatch<SetStateAction<Array<StreetOptionList>>>;
  setFilterStatus: Dispatch<SetStateAction<Array<string>>>;
  setFilterStatusList: Dispatch<SetStateAction<Array<OptionList>>>;
  setFilterWorker: Dispatch<SetStateAction<Array<string>>>;
  setFilterWorkerList: Dispatch<SetStateAction<Array<OptionList>>>;
  setFilterText: Dispatch<SetStateAction<string>>;
  setFilterDateStart: Dispatch<SetStateAction<null | Date>>;
  setFilterDateEnd: Dispatch<SetStateAction<null | Date>>;
  setFilterTaskDone: Dispatch<SetStateAction<null | number>>;
  setFilterTaskType: Dispatch<SetStateAction<null | number>>;
  setTaskList: Dispatch<SetStateAction<Array<Task>>>;
  setPageRows: Dispatch<SetStateAction<number>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setTaskTotal: Dispatch<SetStateAction<number>>;
  setTaskId: Dispatch<SetStateAction<number>>;
  setConnTypeId: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<any>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowPreloader: Dispatch<SetStateAction<boolean>>;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<null | string>>;

  setAppCookieToken: (token: string) => void;
  setAppCookieDark: (isDark: boolean) => void;
  getAppCookie: () => AppCookie;
}

export interface AppCookie {
  token: string;
  isDark: boolean;
}
