import React, { useState } from "react";
import style from "./ToDoInput.module.css";

const ToDoInput = ({onCreateTask}) => {
    const [text, setText] = useState("");

    return (
        <div className={style.Main}>
            <input
                className={style.input} 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Something"
            />
            <button className={style.btn} onClick={() => onCreateTask(text)} >+</button>
        </div>
    )
}

export default ToDoInput;