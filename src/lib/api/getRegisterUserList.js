import useHttp from '../../hooks/useHttp';

export function getRegisterUserList(path) {
  return useHttp({
    url: path,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}
