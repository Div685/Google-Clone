import React, { createContext, useContext, useReducer } from 'react';

// Prepate data layer (REact context API)
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider> 
);

// This is Hook which allows us to pull data from data layer
export const useStateValue = () => useContext(StateContext);