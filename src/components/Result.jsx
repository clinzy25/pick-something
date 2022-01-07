import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';

const Result = () => {
  const { result, greeting } = useContext(Context);

  return (
    result && (
      <ResultWrapper className="">
        <h1>
          {`Congrats, you're going to`}{' '}
          <span className="result">{result}</span>
          <span>.</span>
        </h1>
        <h3>{greeting}</h3>
      </ResultWrapper>
    )
  );
};

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .result {
    color: green;
  }
`;

export default Result;
