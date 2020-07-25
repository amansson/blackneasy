import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import Footer from './app/Footer';
import Home from './pages/Home';
import Animal from './pages/Animal';
import Certificate from './pages/Certificate';
import Puppies from './pages/Puppies';
import Gallery from './pages/Gallery';
import Kennel from './pages/Kennel';


const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div id="main">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/animal" component={Animal} exact />
                    <Route path="/certificate" component={Certificate} exact />
                    <Route path="/puppies" component={Puppies} exact />
                    <Route path="/gallery" component={Gallery} exact />
                    <Route path="/kennel" component={Kennel} exact />
                </Switch>
            </div>
            <Footer />
        </Fragment>
    )
}

export default App;
