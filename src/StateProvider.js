import React, {createContext, useContext, useReducer} from "react";
//Prepares the data layer
export const StateContext = createContext();
//Wrap our app
export const StateProvider=({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
); 
  

//pull infofrom data layer
export const useStateValue = () => useContext(StateContext)