import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import Footer from './app/Footer';
import Home from './pages/Home';
import Animal from './pages/Animal';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div id="main">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/animal" component={Animal} exact />
                </Switch>
            </div>
            <Footer />
        </Fragment>
    )
}

export default App;
