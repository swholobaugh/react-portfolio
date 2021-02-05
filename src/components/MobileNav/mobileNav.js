import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  mobileRoot: {
    display: 'flex',
  },
  mobileNavBar: {
    width: '200px',
    flexShrink: 0,
  },
}));

const menuItems = [
  { name: 'About', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: 'work' },
  { name: 'Education', path: '/education' },
];

const MobileNav = () => {
  const history = useHistory();
  const styleClasses = useStyles();

  return (
    <div className={styleClasses.mobileRoot}>
      <AppBar position="fixed">
        <Toolbar>

        </Toolbar>
      </AppBar>
            
    </div>
  )
}

export default MobileNav;