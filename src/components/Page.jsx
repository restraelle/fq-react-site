import React from 'react';

import ImageBlank from '../static/img/blank.jpg';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image ? this.props.image : ImageBlank,
            title: this.props.title ? this.props.title : "Untitled"
        };
    }
    render() {
        return (
            <div className="page">
                <div className="page__header" style={{backgroundImage: "url(" + this.state.image + ")"}}>
                    <div className="content">
                        <h1>{this.state.title}</h1>
                    </div>
                </div>
                <div className="page__content">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}