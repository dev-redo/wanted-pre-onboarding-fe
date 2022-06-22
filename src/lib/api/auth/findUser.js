import { requestJson } from '../requestJson';

/**
 * findUser
 * @typedef {function}
 * @function findUser - 입력받은 values에 해당하는 사용자가 존재하는지 판별
 * @param {email, password} inputValues
 * @return { boolean } 일치하는 사용자가 존재하는지 여부
 */
export async function findUser({ email, password }) {
  const registerUserList = await requestJson('./data/registerUserList.json');
  const isUserExist = registerUserList['data'].find(
    ({ userEmail, userPassword }) => {
      return email === userEmail && password === userPassword;
    },
  );

  return Boolean(isUserExist);
}
