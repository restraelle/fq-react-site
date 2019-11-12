import React from 'react';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import Footer from './Footer';

export default class Template extends React.Component {
    render() {
        return (
            <div className="layout">
                <Navigation>
                    <NavigationItem title="Home" link="/"/>
                    <NavigationItem title="About" link="/about"/>
                    <NavigationItem title="Product Portfolios" link="/portfolios">
                        <NavigationItem title="Bismuth Derivatives" link="/portfolios/bismuth-derivatives" level={1}/>
                        <NavigationItem title="Natural Vegetable Oils" link="/portfolios/natural-vegetable-oils" level={1}/>
                        <NavigationItem title="Sun & Skin Care" link="/portfolios/sun-skin-care" level={1}/>
                    </NavigationItem>
                    <NavigationItem title="Contact" link="/contact"/>
                </Navigation>

                {this.props.children}

                <Footer/>
            </div>
        );
    }
}