import React from 'react';

const SelectBox = () => (
  <select onChange={e => console.log(e.target.value)} >
    <option onChange={e => console.log(e)} key="1" value="1">1</option>
    <option onChange={e => console.log(e)} key="2" value="2">2</option>
    <option onChange={e => console.log(e)} key="3" value="3">3</option>
  </select>
);

export default SelectBox;
