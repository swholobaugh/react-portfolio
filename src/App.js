import React, { useState, useEffect } from 'react';
import Pages from './pages/index';

const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/swholobaugh')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  console.log(user);

  if(!user) {
    return <div />
  }

  return (
    <Pages user={user} />
  );
}

export default App;
