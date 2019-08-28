import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    render() {
        const {count, IncrementCount} = this.props;
        return (
            <div>
                <button onClick = {IncrementCount}>Click {count} me!</button>
            </div>
        )
    }
}

export default ClickCounterTwo
