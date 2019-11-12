import React from 'react';

import {Link} from 'react-router-dom';

export default class NavigationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level ? this.props.level : 0
        }
    }
    renderChildren() {
        if(this.props.children) {
            return (
                <ul class="nav-dropdown__1">
                    {this.props.children}
                </ul>
            );
        }
    }
    renderLink() {
        if(this.props.external) {
            return (
                <a href={this.props.link}>{this.props.title}</a>
            );
        } else {
            return (
                <Link to={this.props.link}>{this.props.title}</Link>
            );
        }
    }
    render() {
        if(this.state.level === 0) {
            return (
                <li class="nav-link">
                    {this.renderLink()}
                    {this.renderChildren()}
                </li>
            );
        } else {
            if(this.props.external) {
                return (
                    <li href={this.props.link} class="nav-dropdown__1__link">{this.props.title}</li>
                );
            } else {
                return (
                    <Link to={this.props.link} class="nav-dropdown__1__link">{this.props.title}</Link>
                );
            }
        }
    }
}