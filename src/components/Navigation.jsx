import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../static/img/logo-text-white.png';
import Icon from '../static/img/logo-white.png';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0,
            scrollTransitionPosition: 100,
            showMenu: false
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleMobileKebabTap = this.handleMobileKebabTap.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({
            scrollPosition: window.pageYOffset
        })
    }

    handleMobileKebabTap() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    renderMobile() {
        let components = React.Children.map(this.props.children, (child) => {
            return (
                <Link to={child.props.link} onClick={() => this.handleMobileKebabTap()}>{child.props.title}</Link>
            );
        })
        return components;
    }

    render() {
        return (
            <div class="navigation">
                <div class={this.state.scrollPosition > this.state.scrollTransitionPosition ? "nav-desktop nav-desktop--scrolled" : "nav-desktop"}>
                    <div class="nav-desktop-box screen-bound">
                        <div class="left" style={{"height": "100%"}}>
                            <Link to={"/"}>
                                <img src={Logo}/>
                            </Link>
                        </div>
                        <div class="left">
                            <ul class="nav-links">
                                {this.props.children}
                            </ul>
                        </div>
                        <div class="right social-links">
                            <a href="https://www.facebook.com/FQchemUSA/" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/fq_usa" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/fq-specialty-chemicals-usa/" target="_blank" rel="noreferrer noopener"><i class="fab fa-linkedin"></i></a>                    
                        </div>
                    </div>
                </div>
                <div class="nav-mobile">
                    <Link to={"/"}>
                        <img src={Logo}/>
                    </Link>
                    <div className={"nav-mobile__kebab right " + (this.state.showMenu ? "nav-mobile__kebab--active" : "")} onClick={() => this.handleMobileKebabTap()}>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className={"nav-mobile__menu" + (this.state.showMenu ? " nav-mobile__menu--active" : "")}>
                    <div className="nav-mobile__menu__close" onClick={() => this.handleMobileKebabTap()}>
                        <i class="fas fa-times"></i>
                    </div>
                    
                    <div className="nav-mobile__menu__content">
                        {this.renderMobile()}
                    </div>
                </div>
            </div>
        );
    }
}