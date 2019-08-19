import React from 'react'

function Person(props) {
    const {keyIndex,person} = props;
    const personsDetails =  <h2>{keyIndex}  my name is {person.name} with id {person.id},
    i am {person.age} years old. i know {person.skill}</h2>
    return (
        <div>
            {personsDetails}
        </div>
    )
}

export default Person
