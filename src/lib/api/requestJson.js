import useHttp from '../../hooks/useHttp';

/**
 * requestJson
 * @typedef {function}
 * @function requestJson - 로컬의 Json파일을 fetch하는 함수
 * @param {path} fetch하고자 하는 JSON의 로컬 경로
 * @return { json } fetch한 JSON 파일
 */
export function requestJson(path) {
  return useHttp({
    url: path,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}
