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
        <Route exact path="/Portfolio" component ={Home} />
        <Route exact path="/Portfolio/home" component={Home} />
        <Route exact path="/Portfolio/experience" component={Experience} />
        <Route exact path="/Portfolio/projects" component={Projects} />
        <Route exact path="/Portfolio/education" component={Education} />
        <Route exact path="/Portfolio/skills" component={Skills} />
        <Route exact path="/Portfolio/resume" component={Resume} />
    </Switch>
)

export default Main;