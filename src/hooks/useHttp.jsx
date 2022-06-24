/**
 * useHttp
 * @typedef { function }
 * @function fetch 커스텀 훅
 * @param { object } reqConfig
 * @return { any } response 객체
 */
export async function useHttp(reqConfig) {
  const { url, method, headers, body } = reqConfig;

  const res = await fetch(url, {
    method: method || 'GET',
    headers: headers || {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) {
    throw new Error('Failed to request data');
  }

  const payload = await res.json();
  return payload;
}
