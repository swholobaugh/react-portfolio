import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  projectRoot: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
  },
  projectHeader: {
    fontWeight: '500',
    fontSize: '2.5em',
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'Column',
  },
  cardHeader: {

  },
  chip: {
    marginRight: '1em',
    marginTop: '1em',
  },
  divider: {
    marginLeft: '1em',
    marginRight: '1em'
  }
}));

const Projects = ({ user }) => {

  const styleClasses = useStyles();

  return (
    <Layout user={user}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <header className={styleClasses.projectHeader}>Projects</header>
        </Grid>
        {user.projects.map((project, i) => (
          <Grid item xs={12}>
            <Card key={i} className={styleClasses.projectCard}>
              <CardHeader
                className={styleClasses.cardHeader}
                title={project.name}
              />
              <Divider className={styleClasses.divider} />
              <CardContent>
                <p>{project.summary}</p>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Chip 
                    key={j}
                    label={item}
                    color="primary"
                    variant="outlined"
                    className={styleClasses.chip}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Projects;