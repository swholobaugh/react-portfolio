import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';

const About = ({ user }) => {

    return (
        <Layout user={user}>
            <div>About Component</div>
        </Layout>
    )
}

export default About;