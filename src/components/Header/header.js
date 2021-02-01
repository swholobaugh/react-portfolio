import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginLeft: '8px',
    },
    header: {
        
    },
    name: {

    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        textDecoration: 'none',
        height: '20px',
        fontWeight: 'bold',
        marginTop: '2rem',
        margin: 'auto',
    }
})

const Header = ({ user }) => {
    const location = useLocation();
    const styleClasses = useStyles();

    return (
        <div 
            className={styleClasses.root}
            isHome={location.pathname === '/'}
        >
            <div>
                <h2>{user.basics.name}</h2>
                <h4>
                    <a
                        href={`https://gitconnected.com/${user.basics.username}`}
                        target="_blank"
                        rel="noreferrer noopener"
                    >   
                        @{user.basics.username}
                    </a>
                </h4>
                <p>{user.basics.label}</p>
                <p>Coding in {user.basics.region}</p>
                <p>1 year of experience as a developer</p>
                <p>{user.basics.headline}</p>
            </div>
            <Link
                className={styleClasses.link}
                component="button"
                color='primary'
            >
                <a
                    href={`https://gitconnected.com/${user.basics.username}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                ResumeLink
                </a>
            </Link>
        </div>
    )
}

export default Header;