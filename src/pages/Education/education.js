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
  educationRoot: {
    display: 'flex'
  },
  educationHeader: {
    fontWeight: '500',
    fontSize: '2.5em',
  },
  divider: {
    marginLeft: '1em',
    marginRight: '1em'
  }
}));

const Education = ({ user }) => {
  
  const styleClasses = useStyles();

  return (
    <Layout user={user}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <header className={styleClasses.educationHeader}>Education</header>
        </Grid>
        {user.education.map((education, i) => (
          <Grid item xs={12}>
            <Card key={i}>
              <CardHeader
                title={education.institution}
              />
              <Divider className={styleClasses.divider} />
              <CardContent>
                <header>
                  {education.studyType}, {education.area}
                </header>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </CardContent>
              <p>{education.description.replace('\n\n', '\n')}</p>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Education;