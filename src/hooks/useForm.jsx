import { useCallback, useState, useEffect } from 'react';

export default function useForm({ initValues, validator, inputRegex }) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const isAllValid = Object.values(errors).every(v => v);

  useEffect(() => {
    setErrors(validator(values, inputRegex));
  }, [values]);

  const valuesChangeHandler = useCallback(
    e => {
      const { name, value } = e.target;
      const newData = {
        ...values,
        [name]: value,
      };
      setValues(newData);
    },
    [values],
  );

  return {
    values,
    valuesChangeHandler,
    errors,
    isAllValid,
  };
}
