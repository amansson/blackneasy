import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import Landing from './pages/Home';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route path="/" component={Landing} exact />
            </Switch>
        </Fragment>
    )
}

export default App;
