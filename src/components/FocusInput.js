import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef();
    }

    handleSubmit = () => {
        this.componentRef.current.focusInput();
    }
    
    render() {
        return (
            <div>
                <Input type = "text" ref = {this.componentRef}/>
                <button onClick = {this.handleSubmit}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
