import React from 'react';

import Template from '../Template';
import Page from '../Page';

import ImageVegetableOil from '../../static/img/vegetable-oil.jpg';

export default class NaturalVegetableOils extends React.Component {
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
            <Page title="Natural Vegetable Oils" image={ImageVegetableOil}>
                <p>We offer various types of natural vegetable oils, from common & commodity to more obscure and speciality oils.</p>
                <div className="desktop-half mobile-whole left">
                    <h4>Commodity Oils</h4>
                    <ul>
                        <li>Sunflower (All Grades)</li>
                        <li>Sweet Almond Oil</li>
                        <li>Sweet Almond Oil <i>Cosmetic</i></li>
                        <li>Grapeseed Oil</li>
                        <li>Olive Oil (All Grades)</li>
                        <li>Macadamia Oil</li>
                        <li>Avocado Oil</li>
                        <li>Apricot Kernel Oil</li>
                        <li>Hempseed Oil *</li>
                        <li>Castor Oil</li>
                        <li>Coconut Oil (76 degrees)</li>
                    </ul>
                </div>

                <div className="desktop-half mobile-whole right">
                    <h4>Specialty Oils</h4>
                    <ul>
                        <li>Jojoba (All Grades)</li>
                        <li>Olive Squalane</li>
                        <li>Borage Oil</li>
                        <li>Batama Oil</li>
                        <li>Tiger Nut Oil</li>
                        <li>Saw Palmetto Oil</li>
                        <li>Shea Butter</li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                
                
                <p style={{color: "rgba(120,157,122,1)"}}><i>* organic option available</i></p>
            </Page>
        );
    }
}