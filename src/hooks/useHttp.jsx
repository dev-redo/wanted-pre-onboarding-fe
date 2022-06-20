/**
 * @param {url, method, headers, body} reqConfig
 * @return {object}
 */
export default async function useHttp(reqConfig) {
  const { url, method, headers, body } = reqConfig;

  const res = await fetch(url, {
    method: method || 'GET',
    headers: headers || {},
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) {
    throw new Error('Failed to request data');
  }

  const payload = await res.json();
  return payload;
}
