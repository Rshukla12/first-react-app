import React from "react";
import style from "./CardPrice.module.css";

const CardPrice = ({details}) => {
    const {newPrice, oldPrice} = details;
    return (
        <div className={style.CardPrice}>
            <div className={style.New}>${newPrice}</div>
            <div className={style.Old}>${oldPrice}</div>
        </div>
    )
}

export default CardPrice;