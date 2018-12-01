import React from 'react';
import './WordButton.css';

export default class WordButton extends React.Component {

    static defaultProps = {
        onClick: () => {}
    }

    handleClick = () => {
        this.props.onClick(this.props.value);
    }

    render() {
        return (
            <button
                className={this.props.className}
                onClick={this.handleClick}>
                {this.props.value}
            </button>
        )
    }

}