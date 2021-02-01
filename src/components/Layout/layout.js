import React from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    layoutRoot: {
        display: 'flex',
    },
    layoutContent: {
        alignItems: 'center',
        width: '95%'
    },
    header: {
        display: 'flex',
        marginLeft: '1em',
    },
    sidebar: {
        
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      height: '3.5em'
    },
    children: {
        marginTop: '2em',
        display: 'flex',
        marginLeft: '1em',
        marginRight: '1em',
    },
    toolbar: theme.mixins.toolbar
}));

const Layout = ({ user, children }) => {
  const styleClasses = useStyles();

  return (
    <div className={styleClasses.layoutRoot} >
      <AppBar position="fixed" className={styleClasses.appBar} />
      <Sidebar className={styleClasses.sidebar} />
      <div className={styleClasses.layoutContent}>
        <div className={styleClasses.toolbar} />
        <div className={styleClasses.header}>
          <Header 
            user={user} 
            className={styleClasses.header}
          />
        </div>
        <Divider />
        <div className={styleClasses.children}>{children}</div>
      </div>
    </div>
  )
}

export default Layout;