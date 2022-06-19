// TODO: public 경로 설정
import userData from '../../../public/data/userData.json';

export default function findUser([email, password]) {
  const isUserExist = userData['data'].includes(
    ({ userEmail, userPassword }) => {
      return email === userEmail && password === userPassword;
    },
  );

  return isUserExist;
}
