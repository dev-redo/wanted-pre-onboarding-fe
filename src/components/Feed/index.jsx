import React, { useState } from 'react';
import { useUserState } from '../../modules/context/auth';
import Feed from './Feed';
import { convertNationalNumbers } from '../../util/convertNationalNumbers';

export default function FeedLayout({ feed }) {
  const { userId } = useUserState();
  const {
    writerName,
    writerPhoto,
    feedImg,
    likeCount,
    description,
    comments,
  } = feed;

  const [updatedComments, setUpdatedComments] = useState(comments);
  const commentSubmitCallback = value => {
    setUpdatedComments([...updatedComments, value]);
  };

  return (
    <Feed>
      <Feed.Header name={writerName} avatar={writerPhoto} />
      <Feed.Img src={feedImg} />
      <Feed.Content>
        <Feed.Icons />
        <Feed.LikeCnt
          likeCnt={convertNationalNumbers({ num: likeCount })}
        />
        <Feed.Info name={writerName} description={description} />
        <Feed.Comments comments={updatedComments} />
      </Feed.Content>
      <Feed.Input
        user={userId}
        comments={updatedComments}
        submitCallback={commentSubmitCallback}
      />
    </Feed>
  );
}
