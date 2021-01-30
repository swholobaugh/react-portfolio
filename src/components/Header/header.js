import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        
    },
    header: {
        
    },
})

const Header = (user) => {
    const location = useLocation();
    const styleClasses = useStyles();

    return (
        <div 
            className={styleClasses.root}
            isHome={location.pathname === '/'}
        >
            <header>Header Component</header>
        </div>
    )
}

export default Header;