import React from 'react';
import { connect } from 'react-redux';
import './WordBox.css';

export class WordBox extends React.Component {

    render() {

        const { wordType, color, isOver, innerRef } = this.props;

        let fill = {};

        if (isOver) {
            fill.opacity = 0.5;
        }

        switch(color.toLowerCase()) {
            case 'yellow':
                fill.backgroundColor = '#F8CE46';
                break;
            case 'green':
                fill.backgroundColor = '#88BC42';
                break;
            case 'red':
                fill.backgroundColor = '#C93B2B';
                break;
            default:
                fill.backgroundColor = 'black';
        }

        return (
            <div 
                className={['wordBox', this.props.className].join(' ')} 
                style={fill}
                ref={innerRef}
            >
                <h2>{wordType}</h2>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    words: state.wordTypes.words
})

export default connect(mapStateToProps)(WordBox);