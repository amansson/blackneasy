import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import Footer from './app/Footer';
import Landing from './pages/Home';

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
