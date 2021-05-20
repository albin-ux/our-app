import React from 'react';
 
const Test = () => {
  const [value, setValue] = React.useState('');
 
  const onChange = event => {
    localStorage.setItem('myValueInLocalStorage', event.target.value);
    setValue(event.target.value);
  };
 console.log(localStorage)
  return (
    <div>
      <h1>Hello React with Local Storage!</h1>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};
 
export default Test;