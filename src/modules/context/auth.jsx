import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  token: JSON.parse(localStorage.getItem('authToken')),
  userId: localStorage.getItem('userId'),
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('authToken', true);
      localStorage.setItem('userId', action.userId);
      return {
        ...state,
        token: true,
        user: action.userId,
      };
    case 'LOGOUT':
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      return {
        ...state,
        token: false,
        user: null,
      };
    default:
      return state;
  }
};

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  return dispatch;
};
