import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount(){
        this.inputRef.current.focus();
        if (this.cbRef) {
            this.cbRef.focus();
        }
    }
    handleButton = (e) => {
        e.preventDefault();
        alert('Hello ' + this.cbRef.value)
        // const answer = (this.cbRef.focus()) ? this.cbRef.value : this.inputRef.current.value
        // alert('Hello ' + answer);
    }
    
    render() {
        return (
            <div>
                <input type = 'text' ref = {this.inputRef} />
                <input type = 'text' ref = {this.setCbRef} />
                <button onClick = {this.handleButton}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
