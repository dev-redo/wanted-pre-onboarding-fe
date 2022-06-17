import { useReducer, useCallback } from 'react';

function httpReducer(state, { type }) {
  if (type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }
  if (type === 'SUCCESS') {
    return {
      data: action.payload,
      error: null,
      status: 'completed',
    };
  }

  if (type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }
  return state;
}

export default function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', payload: responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction],
  );

  return {
    sendRequest,
    ...httpState,
  };
}
