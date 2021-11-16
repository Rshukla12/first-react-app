import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoItem from "./ToDoItem";
import style from "./ToDo.module.css";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        const newTask = {
            title: task,
            status: false,
            id: tasks.length+1
        }
        setTasks([...tasks, newTask]);
    } 

    const toggleStatus = (id) => {
        const updatedTasks = tasks.map( item => {
            item.status = item.id === id ? !item.status : item.status;
            return item;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className={style.Main}>
            <h1>ToDo</h1>
            <div className={style.ToDo}>  
                <ToDoInput onCreateTask={createTask} />
                <div className={style.ToDoItem}>
                    {
                        tasks.map(item=>
                            <ToDoItem 
                                key={item.id} 
                                item={item} 
                                onStatuUpdate={toggleStatus} 
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDo;