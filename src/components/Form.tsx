import React, { useState } from 'react';

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormPropsType) => {
  const [inputValue, setInputValue] = useState<string>(''); // 新しいステートを追加

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    props.setCity(e.target.value);
  };

  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="都市名" value={inputValue}
      // onChange={e => props.setCity(e.target.value)} />
      onChange={handleInputChange} />
      <button type="submit" disabled={!inputValue.trim()} >Get Weather</button>
    </form>
  );
};

export default Form;
