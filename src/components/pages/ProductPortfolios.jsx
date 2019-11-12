import React from 'react';
import {Link} from 'react-router-dom';

import Template from '../Template';
import Page from '../Page';

export default class ProductPortfolios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <Page title="Product Portfolios">
                <p>Check out our different catalogs for all of the material that we offer.</p>
                <ul>
                    <li><Link to="/portfolios/bismuth-derivatives">Bismuth Derivatives</Link></li>
                    <li><Link to="/portfolios/natural-vegetable-oils">Natural Vegetable Oils</Link></li>
                    <li><Link to="/portfolios/sun-skin-care">Sun & Skin Care</Link></li>
                </ul>
            </Page>
        );
    }
}