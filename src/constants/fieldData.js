import { REGEX_EMAIL, REGEX_PW } from '../constants/regex';

export const loginField = [
  {
    name: 'email',
    placeholder: '전화번호, 사용자 이름 또는 이메일',
    type: 'text',
    regex: REGEX_EMAIL,
  },
  {
    name: 'password',
    placeholder: '비밀번호',
    type: 'password',
    regex: REGEX_PW,
  },
];

export const commentField = {
  name: 'comment',
  placeholder: '댓글 달기',
  type: 'text',
};
