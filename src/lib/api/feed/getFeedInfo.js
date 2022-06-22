import { requestJson } from '../requestJson';

export async function getFeedInfo() {
  const feedInfoList = await requestJson('./data/instargramFeedData.json');
}
