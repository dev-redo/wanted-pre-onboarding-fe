import { getRegisterUserList } from './getRegisterUserList';

/**
 * @param {email, password} inputValues
 * @return {boolean}
 */
export async function findUser({ email, password }) {
  const registerUserList = await getRegisterUserList(
    './data/registerUserList.json',
  );
  const isUserExist = registerUserList['data'].find(
    ({ userEmail, userPassword }) => {
      return email === userEmail && password === userPassword;
    },
  );

  return isUserExist;
}
