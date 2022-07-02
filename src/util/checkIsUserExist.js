/**
 * checkIsUserExist
 * @typedef { checkIsUserExist }
 * @function checkIsUserExist - 입력받은 values에 해당하는 사용자가 존재하는지 판별
 * @param { object } 입력된 email, password 객체
 * @param { json } 가입된 유저의 email, password 정보를 담은 JSON파일
 * @return { boolean } 일치하는 사용자가 존재하는지 여부
 */
export function checkIsUserExist(
  { email, password },
  registerUserList,
) {
  const isUserExist = registerUserList['data'].find(
    ({ userEmail, userPassword }) => {
      return email === userEmail && password === userPassword;
    },
  );

  return Boolean(isUserExist);
}
