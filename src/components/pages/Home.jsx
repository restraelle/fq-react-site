import React from 'react';
import {Link} from 'react-router-dom';

import Template from '../Template';

import ImagePepto from '../../static/img/pepto.jpg';
import ImageGrain from '../../static/img/grain.jpg';
import ImageLeaf from '../../static/img/leaf.png';
import ImageDairyCow from '../../static/img/dairy-cow.jpg';
import ImageMakeup from '../../static/img/makeup.jpg';
import ImageMakeup2 from '../../static/img/makeup-2.jpg';
import ImageOliveOil from '../../static/img/olive-oil.jpg';
import NavigationItem from '../NavigationItem';
import PostThumbnail from '../PostThumbnail';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="background"></div>

                <div class="hero">
                    <div class="screen-bound">
                        <img src={ImageLeaf} className="desktop-hidden full-width" style={{"padding": "0px 20px 20px", "box-sizing": "border-box"}}/>
                        <div class="desktop-half mobile-whole hero-text">
                            <h2>Eco-friendly and all-natural oils & ingredients.</h2>
                            <p>With over 100 years combined of experience, FQ Specialty Chemicals, USA is dedicated to the Natural Ingredients market in the Pharmaceutical, Food and Cosmetic industries. With manufacturing, sourcing and market intelligence, you can rely on FQ USA to deliver strong, reliable ingredients with 100% transparency and traceability.</p>
                        </div>
                    </div>
                </div>

                <div class="overlap">
                    <div class="section-image section-text-invert section__type-1" style={{"background-color": "orange", "z-index": "1"}}>
                        <div class="desktop-half mobile-whole left section-image-left" style={{"background-image": "url(" + ImagePepto + ")"}}></div>
                        <div class="desktop-half mobile-whole right">
                            <div class="section-comp-right" style={{"margin-top": "90px"}}>
                                <h3>Bismuth Derivatives</h3>
                                <p>FQ Specialty Chemicals is the only North American producer of Bismuth Derivatives for the Pharmaceutical, Veterinary, Cosmetics and Industrial industries. With over 60 years of production and R7D experience, FQ Specialty Chemicals delivers strong expertise along with continual product development.</p>
                            </div>
                        </div>
                    </div>
                    <div class="section-image section-text-invert section__type-2 overlap" style={{"background-color": "#232832", "z-index": "2"}}>
                        <div class="desktop-hidden mobile-whole section-image-right" style={{"background-image": "url(" + ImageGrain + ")"}}></div>
                        <div class="desktop-half mobile-whole left">
                            <div class="section-comp-left" style={{"margin-top": "145px"}}>
                                <h3>Thinking green with Natural Vegetable Oils</h3>
                                <p>FQ Specialty Chemicals, USA brings global partners for a wide variety of natural vegetable oils in one expert and solutions delivered package for all of your Food & Personal Care formulations.</p>
                            </div>
                        </div>
                        <div class="mobile-hidden desktop-half mobile-whole right section-image-right" style={{"background-image": "url(" + ImageGrain + ")"}}></div>
                    </div>
                    <div class="section">
                        <div class="content">
                            <h4 class="text-center">Stories</h4>
                            <PostThumbnail image={ImageDairyCow} title="Bismuth Subnitrate Veterinary Grade">
                                <p>Our new Bismuth Subnitrate Veterinary Grade fine powder has been specifically designed to prepare Internal Teat Sealant suspensions used to prevent mastitis infection in dairy cows during the dry period.</p>
                                {/* <p>Our Bismuth Subsalicylate USP powders are designed for Antacid and Gastro drugs for both Human and Animal Health. We can assist in any specific requirement either for tablet or suspension forms.</p> */}
                                {/* <p>Our extended line of Bismuth Oxychloride Pearlescent Pigments are dedicated to Makeup Cosmetics and Personal Care Formulations. They bring an incomparable smoothness and glow to the skin.</p> */}
                            </PostThumbnail>
                            <PostThumbnail image={ImageOliveOil} title="Natural Vegetable Oils for Bakeries">
                                <p>FQ USA brings extensive knowledge and variety of Natural vegetable oils for the Bakery industry. WE exceed the market standard for traceability and regulation compliance.</p>
                            </PostThumbnail>
                            <PostThumbnail image={ImageMakeup} title="Cosmetic Blends">
                                <p>FQ USA has an extensive line of Natural Vegetable Oil blends for the Cosmetic sector. These blends are engineered to replicate that natural vegetable oil profile while maximizing performance at an economical advantage.</p>
                            </PostThumbnail>
                            <PostThumbnail image={ImageMakeup2} title="Silicone Replacement">
                                <p>FQ USA has partnered with <a href="#">The Innovation Company</a> to deliver effective, safe silicone replacements replicating the feel and functionality of silicones in the cosmetic and personal care markets</p>
                            </PostThumbnail>
                        </div>
                        <div className="clearfix"></div>
                        <div className="full-width text-center">
                            <Link to={this.props.link} class="button" style={{"margin-top": "10px"}}>Read More</Link>
                        </div>
                    </div>
                    <div class="section">
                        <h4 class="text-center" style={{"margin-top": "0px", "color": "rgb(120, 120, 120)"}}>FQ Global</h4>
                        <div class="sites">
                            <a href="/" class="sites__item" style={{"color": "rgb(111, 194, 227)"}}>
                                <i class="fas fa-globe-americas"></i>
                                <p>FQ Central America</p>
                            </a>
                            <a href="/" class="sites__item" style={{"color": "rgb(101, 214, 131)"}}>
                                <i class="fas fa-globe-europe"></i>
                                <p>FQ Europe</p>
                            </a>
                            <a href="/" class="sites__item" style={{"color": "rgb(217, 188, 126)"}}>
                                <i class="fas fa-globe-asia"></i>
                                <p>FQ Asia</p>
                            </a>
                            <a href="/" class="sites__item" style={{"color": "rgb(66, 117, 158)"}}>
                                <i class="fas fa-globe-americas"></i>
                                <p>FQ USA</p>
                            </a>
                            <a href="/" class="sites__item" style={{"color": "rgb(217, 126, 132)"}}>
                                <i class="fas fa-globe-americas"></i>
                                <p>FQ CANADA</p>
                            </a>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div class="section section--invert contact-section" style={{"padding": "100px 0px"}}>
                        <div class="content">
                            <div class="contact-info desktop-half mobile-whole left">
                                <h4 class="styled-title" style={{"margin-bottom": "30px"}}>Contact Us</h4>
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}