import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('Regular Component')
        return (
            <div>
                <h1>Regular Component {this.props.name}</h1>
            </div>
        )
    }
}

export default RegComp
