import React, { useState, useEffect } from 'react';

export default function ResultPage(reqConfig, Success, Fail) {
  const [result, setResult] = useState(false);

  const fetchData = useHttp(reqConfig);
  useEffect(() => {
    fetchData()
      .then(() => {
        setResult(true);
      })
      .catch(() => {
        setResult(false);
      });
  }, [fetchData]);

  if (result) return Success;
  return Fail;
}
