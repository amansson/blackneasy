import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import Footer from './app/Footer';
import Home from './pages/Home';
import Animal from './pages/Animal';
import Certificate from './pages/Certificate';
import Puppies from './pages/Puppies';
import Gallery from './pages/Gallery';
import Brood from './pages/Brood';
import Meetup from './pages/Meetup';
import About from './pages/About';


const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div id="main">
                <Switch>
                    <Route path="/blackneasy/" component={Home} exact />
                    <Route path="/blackneasy/animal" component={Animal} exact />
                    <Route path="/blackneasy/certificate" component={Certificate} exact />
                    <Route path="/blackneasy/puppies" component={Puppies} exact />
                    <Route path="/blackneasy/brood" component={Brood} exact />
                    <Route path="/blackneasy/about" component={About} exact />
                    <Route path="/blackneasy/gallery" component={Gallery} exact />
                    <Route path="/blackneasy/meetup" component={Meetup} exact />
                </Switch>
            </div>
            <Footer />
        </Fragment>
    )
}

export default App;
