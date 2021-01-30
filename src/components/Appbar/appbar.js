import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    appBarRoot: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    loginButton: {
        position: 'absolute',
        right: '25px'
    }
}));


const AppBarContainer = () => {
    const styleClasses = useStyles();

    return(
        <div className={styleClasses.appBarRoot}>
            <AppBar position="static">
                <Toolbar>
                    <Button 
                        className={styleClasses.loginButton}
                        color="inherit"
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default AppBarContainer;