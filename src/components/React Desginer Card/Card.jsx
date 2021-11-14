import React from "react";
import CardDetail from "./CardDetail";
import CardImage from "./CardImage";
import style from "./Card.module.css";

const Card = ({imgSrc, title, details}) => {

    return (
        <div className={style.Card} >
            <CardImage imgSrc={imgSrc} title={title} />
            <CardDetail details={details} title={title} />
        </div>
    )
}

export default Card;