import React, { Component } from 'react'
import RegComp from './RegComp';
import PureCompnents from './PureComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Hello World!!!'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Hello World!!!'
            })
        }, 2000)
    }
    
    render() {
        console.log('-------------************Parent Component***********-------------')
        return (
            <div>
                <h1>Parent Component</h1>
                <RegComp name = {this.state.name}/>
                <PureCompnents name = {this.state.name}/>
            </div>    
        )
    }
}

export default ParentComp
