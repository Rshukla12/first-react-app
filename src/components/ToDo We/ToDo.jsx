import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);

    const onCreateTask = (task) => {
        const newTask = {
            title: task,
            isCompleted: false,
            id: tasks.length + 1
        }
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    }

    const removeTask = (id) => {
        const updatedTasks = tasks.filter( task => task.id!==id );
        setTasks(updatedTasks);    
    }

    const handleTaskToggle = (id) => {
        const updatedTasks = tasks.map( task => {
            if ( task.id === id )task.status = !task.status;
            return task;
        });

        setTasks(updatedTasks);
    }

    return (
        <>
            <h1>TODO</h1>
            <ToDoInput handleCreateTask={onCreateTask} />
            <div style={{display:'flex', flexDirection:'column', gap: '1rem', alignItems:'center'}}>
                {tasks.map( task => (
                    <ToDoItem title={task.title} status={task.status} id={task.id} handleRemoveTask={removeTask} handleTaskToggle={handleTaskToggle} />
                ))}
            </div>
        </>
    )
}

export default ToDo;