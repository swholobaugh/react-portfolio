import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';

const Home = ({ user }) => {

    return (
        <Layout user={user}>
            <div>Home Component</div>
        </Layout>
    )
}

export default Home;