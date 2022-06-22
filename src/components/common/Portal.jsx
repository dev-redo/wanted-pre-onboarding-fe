import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ children }) {
  const [mount, setMount] = useState(false);
  const body = useRef(null);

  useEffect(() => {
    body.current = document.body;
    setMount(true);
  }, []);

  if (mount) {
    return createPortal(children, body.current);
  }
  return null;
}
