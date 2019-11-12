import React from 'react';

export default class SearchableItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ? this.props.name : "No name",
            description: this.props.description ? this.props.description : "No description"
        };
    }
    render() {
        return (
            <div className="searchable-item">
                <div className="desktop-third mobile-half left">
                    {this.state.name}
                </div>
                <div className="desktop-two-thirds mobile-half right">
                    {this.state.description}
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}