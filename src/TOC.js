import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import './static/css/normalize.css';
import './static/css/skeleton.css';
import './static/css/configurator.scss';
import './static/css/fontawesome.css';

import ScrollToTop from './components/ScrollToTop';
import {RemountingRoute} from './components/RemountingRoute';

import Home from './components/pages/Home';
import ProductPortfolios from './components/pages/ProductPortfolios';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import GenericNotFound from './components/pages/NoMatch';
import Template from './components/Template';
import BismuthDerivatives from './components/pages/BismuthDerivatives';
import NaturalVegetableOils from './components/pages/NaturalVegetableOils';
import SunAndSkinCare from './components/pages/SunAndSkinCare';

export default function TOC() {
    return (
        <React.Fragment>
            <ScrollToTop>
                <Template>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/portfolios" exact component={ProductPortfolios}/>
                        <Route path="/portfolios/bismuth-derivatives" exact component={BismuthDerivatives}/>
                        <Route path="/portfolios/natural-vegetable-oils" exact component={NaturalVegetableOils}/>
                        <Route path="/portfolios/sun-skin-care" exact component={SunAndSkinCare}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route component={GenericNotFound}/>
                    </Switch>
                </Template>
            </ScrollToTop>
        </React.Fragment>
    );
}