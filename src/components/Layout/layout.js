import React from 'react';
import Header from '../Header/header';
import AppBarContainer from '../Appbar/appbar';
import Sidebar from '../Sidebar/sidebar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    layoutRoot: {
        display: 'flex',
    },
    layoutContent: {
        alignItems: 'center',
        width: '100%'
    },
    header: {
        display: 'flex',
    },
    sidebar: {
        
    }
})

const Layout = ({ user, children }) => {
    const styleClasses = useStyles();

    return (
        <div className={styleClasses.layoutRoot} >
            <Sidebar className={styleClasses.sidebar} />
            <div className={styleClasses.layoutContent}>
                <Header 
                    user={user} 
                    className={styleClasses.header}
                />
                <div>{children}</div>    
            </div>
        </div>
    )
}

export default Layout;