import React, { useState } from "react";
import CounterButton from "./CounterButton";

const Counter = ({intial}) => {
    const [count, setCount] = useState(intial);

    const handleCountChange = (val) => {
        setCount(count+val);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <CounterButton title="Decrement" handleCounter={handleCountChange} val={-1} />
            <CounterButton title="Double" handleCounter={handleCountChange} val={count} />
            <CounterButton title="Increment" handleCounter={handleCountChange} val={1} />
        </div>
    )
}

export default Counter;