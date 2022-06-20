import { getUserList } from './getUserList';

/**
 * @param {email, password} inputValues
 * @return {boolean}
 */
export async function findUser({ email, password }) {
  const userList = await getUserList('./data/userData.json');
  const isUserExist = userList['data'].find(({ userEmail, userPassword }) => {
    return email === userEmail && password === userPassword;
  });

  return isUserExist;
}
