import React, { useState, useEffect } from 'react';
import Pages from './pages/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';


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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Pages user={user} />
    </ThemeProvider>
  );
}

export default App;
