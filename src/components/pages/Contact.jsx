import React from 'react';

import Template from '../Template';
import Page from '../Page';

import ImageBuildings from '../../static/img/buildings-2.jpg';

export default class Contact extends React.Component {
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
            <Page title="Contact" image={ImageBuildings}>
                <div className="desktop-half mobile-whole left">
                    <div class="contact-info desktop-half mobile-whole left" style={{top: "13px", position: "relative"}}>
                        <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-phone"></i></div>
                            <p class="no-margin"><b>Phone</b></p>
                            <p class="no-margin">USA: 123.123.1234</p>
                            <p class="no-margin">MEX: 321.321.3210</p>
                        </div>
                        <div class="cf"></div>

                        <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                            <p class="no-margin"><b>E-mail</b></p>
                            <p class="no-margin">contact@fqchem.com</p>
                        </div>
                        <div class="cf"></div>

                        <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-map-marked-alt"></i></div>
                            <p class="no-margin"><b>Offices</b></p>
                            <p class="no-margin">1069 Saint Clair Street</p>
                            <p class="no-margin">Clarksdale, MS 38614</p>
                        </div>
                        <div class="cf"></div>

                    </div>
                </div>
                <div class="contact-form-box desktop-half mobile-whole right">
                    <div class="contact-form">
                        <h5>Send us a message</h5>
                        <label for="name">Name</label>
                        <input id="name" type="text"/>

                        <label for="email">E-mail address</label>
                        <input id="email" type="text"/>

                        <label for="phone_number">Phone Number</label>
                        <input id="phone_number" type="text"/>

                        <label for="message">Message</label>
                        <textarea id="message" type="text"></textarea>

                        <div class="button">Send Message</div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </Page>
        );
    }
}