import React, { Component } from 'react'
import Ninjas from './Ninjas';
import NinjasForm from './NinjasForm';
import './myStyles.css';

export class AppNinjas extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ninjas : [
                 {name: 'Bruce', age: 35, skills: 'React', id: 1},
                 {name: 'Clark', age: 15, skills: 'Angular', id: 2},
                 {name: 'Dave', age: 24, skills: 'Vue', id: 3}
             ]
        }
    }
    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja]
        this.setState({
            ninjas : ninjas
        })
        console.log(ninja);
    }
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        })
        this.setState({
            ninjas : ninjas
        })
        console.log(id)
    }
    componentDidMount(){
        console.log('ComponentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeStyleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        console.log(prevProps, prevState)
        return null
    }
    componentDidUpdate(){
        console.log('ComponentDiDUpdate')
    }

    render() {
        return (
            <React.Fragment>
                <h1 className='colo'>Creating New Name List</h1>
                <Ninjas deleteNinja = {this.deleteNinja} keyIndex = {this.index} ninja = {this.state.ninjas} />
                <NinjasForm addNinja = {this.addNinja}/>
            </React.Fragment>
        )
    }
}

export default AppNinjas
