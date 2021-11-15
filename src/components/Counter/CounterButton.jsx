import React from "react";

const CounterButton = ({title, val, handleCounter}) => {
    return (
        <button style={{marginLeft:'1rem'}} onClick={() => handleCounter(val)}>{title}</button>
    )
}

export default CounterButton;