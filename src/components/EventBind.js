import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello' 
        }
        //Best binding Approach number 3
        //this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     if (this.state.message == 'Hello') {
    //         this.setState({
    //             message: 'Goodbye'
    //         })
    //     }
    //     else{
    //         this.setState({
    //             message: 'Hello'
    //         })
    //     }
    // }
    clickHandler = () => {
        if (this.state.message === 'Hello') {
            this.setState({
                message: 'Goodbye'
            })
        }
        else{
            this.setState({
                message: 'Hello'
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
