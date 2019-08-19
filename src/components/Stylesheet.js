import React from 'react';
import './myStyles.css';

function Stylesheet(props) {
    const classColor = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className = {`${classColor} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
