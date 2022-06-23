import React from 'react';
import IconButton from '../../common/IconButton';
import { BsEmojiSmile } from 'react-icons/bs';

function EmoteBtn({ children, ...props }) {
  return (
    <IconButton {...props}>
      <BsEmojiSmile />
    </IconButton>
  );
}

export default React.memo(EmoteBtn);
