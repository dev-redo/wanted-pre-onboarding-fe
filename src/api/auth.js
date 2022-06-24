import { useHttp } from '../hooks/useHttp';

export const getRegisterUserList = async () =>
  await useHttp({
    url: './data/registerUserList.json',
  });
