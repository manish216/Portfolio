import React from 'react';

import Home from './Home/home';
import Experience from './Experience/experience';
import Projects from './Project/projects';
import Education from './Education/education';
import Skills from './Skills/skills';
import Resume from './Resume/resume';

import { HashRouter, BrowserRouter, Route, Switch,Link } from 'react-router-dom';

const Main = () =>(
    <Switch>
        <Route exact path="/" component ={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;