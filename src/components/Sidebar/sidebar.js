import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    sidebarRoot: {
        display: 'flex',
    },
    sidebarDrawer: {
        width: '200px',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '200px',
    },
    sidebarItem: {
      
    },
    toolbar: theme.mixins.toolbar,
}));

const menuItems = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: 'work' },
    { name: 'Education', path: '/education' },
];

const Sidebar = () => {
  const history = useHistory();
  const styleClasses = useStyles();

  return (
    <div className={styleClasses.sidebarRoot}>
      <Drawer
        className={styleClasses.sidebarDrawer}
        variant="permanent"
        anchor="left"
        classes={{paper: styleClasses.drawerPaper}}
      >
        <div className={styleClasses.toolbar} />
          <List>
            {menuItems.map(item => (
            <ListItem 
              button
              key={item.name}
              className={styleClasses.sidebarItem}
              onClick={() => history.push(item.path)}
            >
              {item.name}
            </ListItem>
            ))}
          </List>
      </Drawer>
    </div>
  )
}

export default Sidebar;