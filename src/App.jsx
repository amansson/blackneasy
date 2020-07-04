import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import Landing from './pages/Home';
import Footer from './pages/Footer';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route path="/" component={Landing} exact />
            </Switch>
            <Footer />
        </Fragment>
    )
}

export default App;
