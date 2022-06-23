import React from 'react';
import IconButton from '../../../common/IconButton';
import { FiBookmark } from 'react-icons/fi';

function BookMark({ children, ...props }) {
  return (
    <IconButton {...props}>
      <FiBookmark />
    </IconButton>
  );
}

export default React.memo(BookMark);
