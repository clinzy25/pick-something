import React, { useState } from 'react';
import greetings from './greetings';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [result, setResult] = useState(null);
  const [greeting, setGreeting] = useState(null);

  const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const addResturant = (newResturant) => {
    const newResturants = [...resturants, newResturant];
    setResturants(newResturants);
  };

  const deleteResturant = (resturantIndex) => {
    const newResturants = resturants.splice(resturantIndex, 1);
    setResturants(newResturants);
  };

  const getRandomGreeting = () => {
    const randInt = randomInteger(0, resturants.length - 1);
    setGreeting(greetings[randInt]);
  };

  const getRandomResturant = () => {
    const randInt = randomInteger(0, resturants.length - 1);
    setResult(resturants[randInt]);
    getRandomGreeting();
  };

  return (
    <Context.Provider
      value={{
        resturants,
        addResturant,
        deleteResturant,
        getRandomResturant,
        result,
        greeting,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
