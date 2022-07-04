import { useHttp } from '../hooks/useHttp';

export const getFeedData = async () =>
  useHttp({
    url: './data/insgramFeedData.json',
  });
