import React, { Component } from 'react'

export class NinjasForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             age: '',
             skills: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor = 'name'>Name</label>
                        <input type = 'text' value = {this.state.name} id = 'name' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor = 'age'>Age</label>
                        <input type = 'text' value = {this.state.age} id = 'age' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor = 'skills'>Name</label>
                        <select id = 'skills' value = {this.state.skills} onChange = {this.handleChange}>
                            <option value = 'javascript'>Javascript</option>
                            <option value = 'php'>Php</option>
                            <option value = 'react'>React</option>
                            <option value = 'angular'>Angular</option>
                            <option value = 'vue'>Vue</option>
                            <option value = 'java'>Java</option>
                            <option value = 'c#'>C#</option>
                            <option value = 'python'>Python</option>
                            <option value = 'mysql'>Mysql</option>
                        </select>
                    </div>
                    <button type ='submit'>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default NinjasForm
