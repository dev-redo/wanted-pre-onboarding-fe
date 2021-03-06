const initialState = {
  token: JSON.parse(localStorage.getItem('authToken')),
  userId: localStorage.getItem('userId'),
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('authToken', true);
      localStorage.setItem('userId', action.userId);
      return {
        ...state,
        token: true,
        userId: action.userId,
      };
    case 'LOGOUT':
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      return {
        ...state,
        token: false,
        userId: null,
      };
    default:
      return state;
  }
};

export { initialState, authReducer };
