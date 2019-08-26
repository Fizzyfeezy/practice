import React from 'react';

//memo works with functional component only

function MemoComp({name}) {
    console.log('Rendering Memo component')
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default React.memo(MemoComp)
