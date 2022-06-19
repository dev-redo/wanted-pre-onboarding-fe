import { atom } from 'recoil';

export const isAuthorized = atom({
  key: 'isAuthorized',
  default: JSON.parse(localStorage.getItem('isAuthorized')),
});
