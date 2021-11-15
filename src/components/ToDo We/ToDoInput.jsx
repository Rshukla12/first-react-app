import React from "react";

const ToDoInput = ({handleCreateTask}) => {
    const [text, setText] = React.useState("");
    const handleInput = (e) => {
        setText(e.target.value);
    }

    const handleNewTask = () => {
        handleCreateTask(text);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleInput} placeholder="Type to Add Tasks" />
            <button onClick={handleNewTask}>Create Task</button>
        </div>
    )
}

export default ToDoInput