import React, { Component } from 'react'
import styles from './styles';

export default class Counter extends Component {
    
    _onIncreCounter = () => {
       this.props.incrementAction();
    }

    _onDecreCounter = () => {
        this.props.decrementAction();
    }

    render() {
        return (
            <div style={ styles.container }>
                <h2>{ this.props.count}</h2>
                <button onClick={ this._onIncreCounter }>increment!</button>
                <button onClick={ this._onDecreCounter }>decrement!</button>
            </div>
        )
    }
}
