import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';

const Work = ({ user }) => {

    return (
        <Layout user={user}>
            <div>Work Component</div>
        </Layout>
    )
}

export default Work;