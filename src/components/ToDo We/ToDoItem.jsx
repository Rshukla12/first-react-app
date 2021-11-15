import React from "react";

const ToDoItem = ({ id, title, status, handleRemoveTask, handleTaskToggle }) => {
    const color = status ? 'green':'red';
    return (
        <div style={{display: "flex", textAlign: "center"}}>
            <h1>{title} - <span style={{height: '2.5rem', padding:'0.3rem 1rem', background:color, cursor: 'pointer'}} onClick={() => handleTaskToggle(id)}>{status?"Completed": "Pending"}</span></h1>
            <button style={{height: '2rem', marginTop: '1.5rem', marginLeft: '1rem'}} onClick={() => handleRemoveTask(id)}>Remove</button>
        </div>
    )
}

export default ToDoItem;