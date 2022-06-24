/**
 * convertNationalNumbers
 * @typedef {function}
 * @function 각 나라의 숫자 표현 방식으로 변환
 * @param {number} 변환할 숫자
 * @param {string} 변환하고자하는 나라
 * @return { string } 각 나라 표현으로 변환된 문자
 */
export function convertNationalNumbers({ num, country }) {
  const convertNum = country
    ? Number(num).toLocaleString(country)
    : Number(num).toLocaleString();

  return convertNum;
}
