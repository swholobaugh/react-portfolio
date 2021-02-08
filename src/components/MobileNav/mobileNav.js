import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  mobileRoot: {
    display: 'flex',
  },
  mobileNavBar: {
    width: '100%',
    flexShrink: 0,
  },
  menuIcon: {
    display: 'flex',
    color: 'white',
    margin: 'auto',
  },
  menu: {
    display: 'flex',
    color: 'white',
    backgroundColor: '#06ba36'
  },
  menuItem: {
    display: 'flex',
    color: 'white',
  }
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

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className={styleClasses.mobileRoot}>
      <AppBar position="fixed" className={styleClasses.mobileNavBar} >
        <Toolbar>
          <IconButton
            className={styleClasses.menuIcon}
            aria-controls="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map(item => (
              <MenuItem 
                button
                key={item.name}
                className={styleClasses.sidebarItem}
                onClick={() => history.push(item.path)}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MobileNav;