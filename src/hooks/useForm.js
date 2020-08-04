import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = (e) => {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
