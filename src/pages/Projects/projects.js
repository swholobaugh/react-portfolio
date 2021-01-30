import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';

const Projects = ({ user }) => {

    return (
        <Layout user={user}>
            <div>Projects</div>
        </Layout>
    )
}

export default Projects;