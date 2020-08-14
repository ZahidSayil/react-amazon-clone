/* eslint-disable react/react-in-jsx-scope */
//setup data layer

import React, { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//export for use
export const useStateValue = () => useContext(StateContext);
