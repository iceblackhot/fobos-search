import React from 'react';
import {useAppContext} from '../../../appContext/appContext';

export const CommentInput = () => {
  const {formData, setFormData, filterTaskDone} = useAppContext();

  // console.log(formData);

  return (
    <div>
      <textarea
        placeholder="Коментр"
        value={formData?.comment}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'comment', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
    </div>
  );
};
