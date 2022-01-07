import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../context';

const Input = () => {
  const [adding, setAdding] = useState(false);
  const [value, setValue] = useState('');
  const { addResturant, getRandomResturant } = useContext(Context);

  const submit = (e) => {
    e.preventDefault();
    addResturant(value);
    setValue('')
  };

  return (
    <BtnWrapper>
      <button className="go" onClick={getRandomResturant}>
        Pick
      </button>
      <button onClick={() => setAdding(true)}>Add Resturant</button>
      {adding && (
        <form action="" onSubmit={submit}>
          <input
            className="input-field"
            placeholder="Type a resturant..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button type="submit">Add</button>
        </form>
      )}
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .go {
    border-radius: 25px;
    background-color: green;
  }
`;

export default Input;
