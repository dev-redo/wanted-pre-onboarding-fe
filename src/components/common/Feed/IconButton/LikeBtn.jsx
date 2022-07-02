import React from 'react';
import IconButton from '../../../common/IconButton';
import { AiOutlineHeart } from 'react-icons/ai';

function Like({ children, ...props }) {
  return (
    <IconButton {...props}>
      <AiOutlineHeart />
    </IconButton>
  );
}

export default React.memo(Like);
