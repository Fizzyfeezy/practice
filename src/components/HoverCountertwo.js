import React, { Component } from 'react'

export class HoverCountertwo extends Component {
    render() {
        const {count, IncrementCount} = this.props;
        return (
            <div>
                <h1 onMouseOver = {IncrementCount}>Hover {count} me!</h1>
            </div>
        )
    }
}

export default HoverCountertwo
