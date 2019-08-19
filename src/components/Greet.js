//stateless - functional component
/*import React from 'react'
function greet () {
    return <h1>Hello World!</h1>
}
const Greet = () => <h1>Hello World!</h1>
export default Greet;*/


//stateful - class component
/* import React, {Component} from 'react'
 class Greet extends Component {
    render(){
        return <h1>Hello World!</h1>
    }
}
export default Greet;*/


//JSX - class:className, for = htmlFor,
/*import React from 'react'
const Greet = () => {
    // return(
    //     <div><h1>Hello World!</h1></div>
    // )
    return React.createElement('div', 
    {id: 'hello', className: 'dome'}, React.createElement('h1',null, 'Same World!') )
}
export default Greet;*/

//functional props
/*import React from 'react'
const Greet = (props) => {
    return(<h1>Hello {props.name}</h1>)    
}
export default Greet;*/

/*import React from 'react'
const Greet = ({name}) => {
    return(<h1>Hello {name}</h1>)    
}
export default Greet;*/

/*import React from 'react'
const Greet = (props) => {
    const {name} = props;
    return(<h1>Hello {name}</h1>)    
}
export default Greet;*/

//class props
/*import React, {Component} from 'react'
class Greet extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Greet;*/

import React, {Component} from 'react'
class Greet extends Component{
    render(){
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return(
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}
export default Greet;

//class state
/*import React, {Component} from 'react'
class Greet extends Component{
    constructor (){
        super()
        this.state = { 
            message : 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({ 
                message : 'Thank you!!!'
        }) 
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={ () => this.changeMessage()}>Change Text</button>
            </div>
        )
    }
}
export default Greet;*/







