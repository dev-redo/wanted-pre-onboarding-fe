/**
 * convertNationalNumbers
 * @typedef {function}
 * @function 각 나라의 숫자 표현 방식으로 변환
 * @param {number} 변환할 숫자
 * @param {string} 변환하고자하는 나라
 * @return {number} 각 나라 표현으로 변환된 숫자
 */
export function convertNationalNumbers({ num, country }) {
  const convertNum = country
    ? num.toLocaleString(country)
    : num.toLocaleString();

  return Number(convertNum);
}
