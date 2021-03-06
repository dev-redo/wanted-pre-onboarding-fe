/**
 * getAsyncValue
 * @typedef { function }
 * @function getAsyncValue - fetch한 Promise 객체의 result를 반환
 * @param { promise } Promise 객체
 * @return { data } fetch한 데이터
 */
export const getAsyncValue = promise => {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    data => {
      status = 'success';
      result = data;
    },
    error => {
      status = 'error';
      result = error;
    },
  );

  return {
    get() {
      if (status === 'pending') {
        throw suspender;
      }

      if (status === 'error') {
        throw result;
      }

      if (status === 'success') {
        return result;
      }
    },
  };
};
