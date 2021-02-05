import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    headerRoot: {
        display: 'flex',
        width: '100%'
    },
    content: {
      marginTop: '-1em'
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
      marginRight: '1.5em',
      color: 'white'
    },
    arrowIcon: {
      color: 'white'
    },
    avatar: {
      width: theme.spacing(23),
      height: theme.spacing(22),
      marginRight: '.75em',
      marginTop: '.65em',
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
      <Avatar 
        className={styleClasses.avatar}
        src={user.basics.image}
        variant="rounded"
      />
      <div className={styleClasses.content}>
        <h1>{user.basics.name}</h1>
        <h4>
          <a
            href={user.basics.email}
            target="_blank"
            rel="noreferrer noopener"
          >
            {user.basics.email}
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
        deleteIcon={<ArrowForward className={styleClasses.arrowIcon} />}
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