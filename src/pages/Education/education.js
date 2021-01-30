import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';

const Education = ({ user }) => {

    return (
        <Layout user={user}>
            <div>Education Component</div>
        </Layout>
    )
}

export default Education;