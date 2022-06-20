import useHttp from '../../hooks/useHttp';

export function requestJson(path) {
  return useHttp({
    url: path,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}
