/**
 * extractIdFromEmail
 * @typedef {function}
 * @function 사용자의 Email을 입력받아 Id를 추출하는 함수
 * @param {string} 사용자 Email
 * @return {number} Email에서 Id 추출
 */
export function extractIdFromEmail(email) {
  return email.substring(0, email.indexOf('@'));
}
