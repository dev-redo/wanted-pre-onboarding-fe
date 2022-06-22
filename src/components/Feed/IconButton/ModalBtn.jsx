import React from 'react';
import IconButton from '../../common/IconButton';
import { BsThreeDots } from 'react-icons/bs';

function ModalBtn({ children, ...props }) {
  return (
    <IconButton width="1.5" height="1.5">
      <BsThreeDots />
    </IconButton>
  );
}

export default React.memo(ModalBtn);
