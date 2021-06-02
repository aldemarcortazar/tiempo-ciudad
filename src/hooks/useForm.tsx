import { useState } from 'react';



const useForm = ( initialState:{} ):Array<any> => {
  const [values, setValues] = useState<{}>( initialState );

  const resetForm = ():void => {
    setValues( initialState );  
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;
    const { name, value } = target;
    setValues({
      ...values,
      name: value,
    });
    console.log(value);
  };

  return [ values , handleInputChange, resetForm];
}

export default useForm;