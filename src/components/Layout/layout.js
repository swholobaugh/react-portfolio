import React from 'react';
import Header from '../Header/header';
import AppBarContainer from '../Appbar/appbar';
import Sidebar from '../Sidebar/sidebar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    layoutRoot: {
        display: 'flex'
    },
    header: {
        display: 'flex'
    },
    sidebar: {

    }
})

const Layout = ({ user, children }) => {
    const styleClasses = useStyles();

    return (
        <div className={styleClasses.layoutRoot}>
            <Sidebar />
            <Header 
                user={user} 
                className={styleClasses.header}
            />
            <div>{children}</div>    
        </div>
    )
}

export default Layout;