import React from "react";
import style from "./DishDetails.module.css";

const DishDetails = ({details}) => {
    const {cal, p, f, c, temp} = details;
    return (
        <div className={style.DishDetails}>
            <div>{cal} Cal</div>
            <div>P/F/C: {p}/{f}/{c}</div>
            <div>{temp} &#8451;</div>
        </div>
    )
}

export default DishDetails;