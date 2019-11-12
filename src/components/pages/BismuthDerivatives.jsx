import React from 'react';

import Template from '../Template';
import Page from '../Page';

import ImageBismuth from '../../static/img/pepto.jpg';

export default class BismuthDerivatives extends React.Component {
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
            <Page title="Bismuth Derivatives" image={ImageBismuth}>
                <p>We offer various types of bismuth derivatives for order.</p>
                <ul>
                    <li>Bismuth Subsalicylate</li>
                    <li>Bismuth Subgallate</li>
                    <li>Bismuth Subnitrate</li>
                    <li>Bismuth Subcarbonate</li>
                    <li>Bismuth Hydroxide</li>
                    <li>Bismuth Oxide</li>
                    <li>Bismuth Colloidal Subcitrate</li>
                    <li>Bismuth Citrate</li>
                    <li>Bismuth Nitrate Crystals</li>
                    <li>Bismuth Subsuccinate</li>
                    <li>Bismuth Tribomophenate</li>
                    <li>Bismuth Oxychloride</li>
                </ul>
            </Page>
        );
    }
}