//rce - short-cut for class
import React, { Component } from 'react'

export class counter extends Component {
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        if (this.state.count < 5) {
            this.setState({
                count: this.state.count + 1
             }, () => console.log('Callback value', this.state.count)) 
        }
        else{
            this.setState({
                count: 'Maximum reached'
            })
        } 
    }
    
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = { () => this.increment()}>Increment</button>
            </div>
        )
    }
}
export default counter
