import React from 'react';
import {Link} from 'react-router-dom';

import ImageHill from '../../static/img/hills.jpg';

import Template from '../Template';
import Page from '../Page';

export default class NoMatch extends React.Component {
    render() {
        return (
            <Page title="Whoops!">
                <p>This page doesn't seem to exist. Let's get you back to a place where stuff makes sense.</p>
                <Link to="/" className="button">Go to Home</Link>
            </Page>
        );
        
    }
}