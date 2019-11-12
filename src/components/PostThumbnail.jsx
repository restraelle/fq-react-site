import React from 'react';
import {Link} from 'react-router-dom';

export default class PostThumbnail extends React.Component {
    render() {
        return (
            <div class="post">
                <div class="post__image" style={{backgroundImage: "url(" + this.props.image + ")"}}></div>
                <div class="post__title">{this.props.title}</div>
                <div class="post__description">{this.props.children}</div>
            </div>
        );
    }
}