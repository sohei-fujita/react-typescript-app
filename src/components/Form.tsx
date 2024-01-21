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

  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e: any) => {
    setSelectedCity(e.target.value);
  };

  return (
    <form onSubmit={props.getWeather}>
      {/* <input type="text" name="city" placeholder="都市名" value={inputValue}
      onChange={handleInputChange} /> */}
      <select name="city" value={selectedCity} onChange={handleCityChange}>
        <option value="tokyo">Paris</option>
        <option value="osaka">Tokyo</option>
        <option value="kyoto">London</option>
      </select>
      <button type="submit" disabled={!inputValue.trim()} >Get Weather</button>
    </form>
  );
};

export default Form;
