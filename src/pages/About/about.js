import React from 'react';
import Layout from '../../components/Layout/layout.js';
import { makeStyles } from '@material-ui/core/styles';

const About = ({ user }) => {

    return (
        <Layout user={user}>
            <div>
                <header>About Me</header>
                <p>{user.basics.summary}</p>
            </div>
            <div>
                <header>Skills</header>
                <div>
                    {user.skills.map(skill => (
                        <div key={skill.name}>{skill.name}</div>
                    ))}
                </div>
            </div>
            <div>
                <header>Profiles</header>
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
            </div>
        </Layout>
    )
}

export default About;