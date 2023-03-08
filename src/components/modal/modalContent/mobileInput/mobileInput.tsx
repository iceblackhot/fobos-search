import {useState, KeyboardEvent, useEffect} from 'react';
import {useAppContext} from '../../../appContext/appContext';
import './mobileInput.scss';

export const MobileInput = () => {
  const {formData, filterTaskDone, setFormData} = useAppContext();
  const [value, setValue] = useState<string>(formData.mobile);

  function changeMobileInput(e: any) {
    let str = e.target.value.replace(/([^\d])/g, '');
    setFormData({type: 'SET_FIELD', field: 'mobile', payload: str.substring(0, 10)});
  }

  function backspaceHook(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace') {
      let str = value.replace(/([^\d])/g, '');
      setValue(str.substring(0, str.length));
    }
  }

  useEffect(() => {
    setValue(formData.mobile.replace(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2}).*/, '($1) $2-$3-$4'));
  }, [formData]);

  return (
    <div className="modal-content__inputs-mobile">
      <input
        className={
          formData.mobile.length < 10
            ? 'modal-content__mobile-input error'
            : 'modal-content__mobile-input'
        }
        id="mobile-input"
        placeholder="Телефон(мобільний)"
        type="text"
        value={value}
        onChange={changeMobileInput}
        onKeyDown={backspaceHook}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
    </div>
  );
};
