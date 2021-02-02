import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
    headerRoot: {
        display: 'flex',
        width: '100%'
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
    },
    chip: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: 'auto',
      marginTop: '1em',
      marginRight: '1.5em'
    }
}));

const Header = ({ user }) => {
  const location = useLocation();
  const styleClasses = useStyles();

  return (
    <div
      className={styleClasses.headerRoot}
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
      <Chip 
        className={styleClasses.chip}
        color="primary"
        label="ResumeLink"
        deleteIcon={<ChevronRightIcon/>}
        onDelete={() => null}
        component="a"
        href={`https://gitconnected.com/${user.basics.username}/resume`}
        target="_blank"
        rel="noopener noreferrer"
        clickable
      />
    </div>
  );
}

export default Header;