import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';

const Resturants = () => {
  const { resturants, deleteResturant } = useContext(Context);

  return (
    <ResturantWrapper>
      {resturants.map((item, i) => (
        <div key={i} className="resturant-ctr">
          <div className="">{item}</div>
          <button onClick={() => deleteResturant(i)} className="delete">
            x
          </button>
        </div>
      ))}
    </ResturantWrapper>
  );
};

const ResturantWrapper = styled.div`
  .resturant-ctr {
    display: flex;
  }
`;

export default Resturants;
