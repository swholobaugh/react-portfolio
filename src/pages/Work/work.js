import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  workRoot: {
    display: 'flex'
  },
  workHeader: {
    fontWeight: '500',
    fontSize: '2.5em'
  },
  divider: {
    marginLeft: '1em',
    marginRight: '1em'
  }
}))

const Work = ({ user }) => {
  const styleClasses = useStyles();

  return (
    <Layout user={user}>
      <Grid container spacing={3}>
        {user.work.map((work, i) => (
          <Grid item xs={12}>
            <Slide
              direction="right" 
              in={true}
              mountOnEnter
              unmountOnExit
            >      
              <Card key={i}>
                <CardHeader 
                  title={work.position}
                />
                <Divider className={styleClasses.divider} />
                <CardContent>
                  <header>{work.company}</header>
                  <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                  <p>{work.summary}</p>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Work;