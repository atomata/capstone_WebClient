import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const got = await fetch('/api/get_pic')
      const text = await got.text()
      console.log(text);
      setData(text);
    })();
  });

  return <div>{data}</div>
}

export default App;