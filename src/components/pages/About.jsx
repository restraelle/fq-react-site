import React from 'react';

import Template from '../Template';
import Page from '../Page';

import ImageHills from '../../static/img/hills.jpg';
import ImageHay from '../../static/img/hay.jpg';

export default class About extends React.Component {
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
            <Page title="About Us" image={ImageHills}>
                <div className="desktop-two-thirds mobile-whole left right-padding">
                    <p>With over 100 years combined of experience, FQ Specialty Chemicals, USA is dedicated to the Natural Ingredients market in the Pharmaceutical, Food and Cosmetic industries.</p>
                    <p>With manufacturing, sourcing and market intelligence, you can rely on FQ USA to deliver strong, reliable ingredients with 100% transparency and traceability.</p>
                </div>
                <div className="desktop-third mobile-whole right">
                    <div className="photo-frame">
                        <img src={ImageHay} alt="" className="full-width"/>
                    </div>
                </div>
                <div className="clearfix"></div>
            </Page>
        );
    }
}