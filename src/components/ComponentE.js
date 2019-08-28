import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './UserContext';

export class ComponentE extends Component {

    static contextType = UserContext
    
    render() {
        return (
            <div>
                <h3>This tutorial Sounds Interesting {this.context}</h3>
                <ComponentF />
            </div>
        )
    }
}

//ComponentE.contextType = UserContext

export default ComponentE
