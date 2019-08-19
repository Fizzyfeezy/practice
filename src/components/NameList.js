//alt arrow up&down - move line up and down
//alt shift arrow up&down - copy line
import React from 'react'
import Person from './Person'

function NameList() {
    const listName = ['Dave', 'Clark', 'Bruce']
    const persons = [
        {
            id : 1,
            name : 'Dave',
            age : 26,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Clark',
            age : 12,
            skill : 'Angular'
        },
        {
            id : 3,
            name : 'Bruce',
            age : 32,
            skill : 'Vue'
        }
    ]
    // const personsDetails = persons.map(person => <h2>my name is {person.name} with id {person.id},
    // i am {person.age} years old. i know {person.skill}</h2>)
    const personsDetails = persons.map((person, index) => <Person keyIndex = {index} person = {person}/>)
    const names = listName.map((name, index) => <h2  key = {index} >{index} {name}</h2>)
    return (
        <div>
            {names}
            {personsDetails}
        </div>
    )
}

export default NameList
