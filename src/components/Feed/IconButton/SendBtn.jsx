import React from 'react';
import IconButton from '../../common/IconButton';
import { GrSend } from 'react-icons/gr';

function Send({ children, ...props }) {
  return (
    <IconButton {...props}>
      <GrSend />
    </IconButton>
  );
}

export default React.memo(Send);
