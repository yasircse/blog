import React from 'react';
import NotFound from '../NotFound/NotFound'
import Home from '../Home/Home'
import About from '../About/About'
import {Route,Switch} from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;