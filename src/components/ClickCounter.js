//rce - short-cut for class
import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {
    //rconst
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount(){
    //     if (this.state.count < 5) {
    //         this.setState(prevState => {
    //             return {count: prevState.count + 1}
    //          })
    //     }
    //     else{
    //         this.setState({
    //             count: 'Maximum reached'
    //         })
    //     } 
    // }
    
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick = {incrementCount}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}
export default withCounter(ClickCounter, 2)
