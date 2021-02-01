import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  aboutRoot: {
    display: 'flex',
      flexDirection: 'row',
      flexGrow: '1',
  },
  aboutHeader: {
    fontWeight: '500',
    fontSize: '2.5em'
  },
  aboutCard: {
    display: 'flex',
    flexDirection: 'column'
  },
  skillsCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
  }, 
  cardHeader: {

  },
  cardContent: {

  },
  divider: {
    marginLeft: '1em',
    marginRight: '1em'
  },
  chip: {
    marginRight: '1em',
    marginTop: '1em'
  }
}));

const About = ({ user }) => {
  const styleClasses = useStyles();

  return (
    <Layout user={user}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <header className={styleClasses.aboutHeader}>About</header>
        </Grid>
        <Grid item xs={12}>
          <Card className={styleClasses.aboutCard}>
            <CardHeader 
              className={styleClasses.cardHeader}
              title={"About Me"}
            />
            <Divider className={styleClasses.divider} />
            <CardContent className={styleClasses.cardContent}>
              {user.basics.summary}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={styleClasses.skillsCard}>
            <CardHeader 
              className={styleClasses.cardHeader}
              title={"Skills"}
            />
            <Divider className={styleClasses.divider} />
            <CardContent className={styleClasses.cardContent}>
              {user.skills.map(skill => (
                <Chip 
                  key={skill.name}
                  label={skill.name}
                  color="primary"
                  variant="outlined"
                  className={styleClasses.chip}
                />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={styleClasses.profilesCard}>
            <CardHeader 
              className={styleClasses.cardHeader}
              title={"Profiles"}
            />
            <Divider className={styleClasses.divider} />
            <CardContent className={styleClasses.cardContent}>
              <ul>
                    {user.basics.profiles.map((profile, item) => (
                  <div key={profile.network}>
                          {item !== 0 && ' | '}
                    <a href={profile.url} target="_blank" rel="noreferrer noopener">
                      {profile.network}
                    </a>
                  </div>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About;