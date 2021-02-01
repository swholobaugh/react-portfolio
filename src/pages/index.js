import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About/about';
import Work from './Work/work';
import Education from './Education/education';
import Projects from './Projects/projects';

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <About user={user} />
                </Route>
                <Route path="/education">
                    <Education user={user} />
                </Route>
                <Route path="/projects">
                    <Projects user={user} />
                </Route>
                <Route path="/work">
                    <Work user={user} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Pages;