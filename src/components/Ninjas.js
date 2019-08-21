import React from 'react'

function Ninjas({ninja, deleteNinja}) {
    const NinjaList = ninja.map((ninja, keyIndex) => {
        // deleteNinja = () => {
        //     deleteNinja(ninja.id);
        // }
        if (ninja.age >= 20) {
            return(
                <React.Fragment key = {ninja.id}>
                    <h2>{keyIndex}  my name is {ninja.name}.
                        i am {ninja.age} years old. i love {ninja.skills} >  
                    <button onClick = {() => deleteNinja(ninja.id)}>Delete</button></h2>
                </React.Fragment>
            )
        }
        else{
            return null;
        }
    }
    )
    return (
        <React.Fragment>
            {NinjaList}
        </React.Fragment>
    )
}

export default Ninjas
