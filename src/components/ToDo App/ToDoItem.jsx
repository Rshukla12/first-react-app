import React from "react";
import style from "./ToDoItem.module.css";

const ToDoItem = ({item, onStatuUpdate}) => {
    const color = item.status ? 'green' : 'red';
    const deco = item.status ? 'line-through' : 'none';
    return (
        <div className={style.Main}>
            <h5 className={style.text} style={{textDecoration:deco}}>{item.title}</h5>
            <div className={style.status} style={{background:color}} onClick={()=>onStatuUpdate(item.id)}>
                <div className={style.gray}></div>
            </div>
        </div>
    )
}

export default ToDoItem;