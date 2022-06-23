/**
 * validator
 * @typedef {function}
 * @function value가 정규표현식을 통과하는지 판별
 * @param {any} test할 value
 * @param {regex} value를 판별할 정규표현식
 * @return {boolean} value가 정규표현식을 통과했는지 여부
 */
export const validator = (value, regex) => regex.test(value);
