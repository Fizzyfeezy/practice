import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggenIn : true
        }
    }
    
    render() {
        return(
            this.state.isLoggenIn && <div>Hello World!!!</div>
        )
        //3rd Method
        // return(
        //     this.state.isLoggenIn ? <div>Hello World!!!</div> : <div>Hello Guest!!!</div>
        // )

        //2nd Method
        // let message;
        // if (this.state.isLoggenIn) {
        //     message = <div>Hello World!!!</div>
        // }
        // else {
        //     message = <div>Hello Guest!!!</div>
        // }
        // console.log(message)
        // return message //<div>{message}</div>

        //1st Method
        // if (this.state.isLoggenIn) {
        //     return (
        //         <div>
        //             Hello World!!!
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             Hello Guest!!!
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         Welcome Vishwas
        //     </div>
        // )
    }
}

export default UserGreeting
