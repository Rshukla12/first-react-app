import React from "react";
import Row from "./Row";
import style from "./List.module.css";

function UnOrderedList(){
    return (
        <div className={style.item}>
            <h4>Unordered List</h4>
            <ul>
                < Row num="1" />
                < Row num="2" />
                < Row num="3" />
            </ul>
        </div>
    );
};

export default UnOrderedList;