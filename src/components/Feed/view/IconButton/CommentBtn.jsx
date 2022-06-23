import React from 'react';
import IconButton from '../../../common/IconButton';
import { FaRegCommentDots } from 'react-icons/fa';

function Comment({ children, ...props }) {
  return (
    <IconButton {...props}>
      <FaRegCommentDots />
    </IconButton>
  );
}

export default React.memo(Comment);
