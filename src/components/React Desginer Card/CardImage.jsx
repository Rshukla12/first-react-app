import React from "react";
import CardIcon from "./CardIcon";
import style from "./CardImage.module.css";

const CardImage = ({
    imgSrc = "https://via.placeholder.com/400x300",
    title
}) => {
    return (
        <div className={style.CardImage}>
            <img src={imgSrc} alt={title} className={style.Image} />
            <CardIcon info={true} />
        </div>
    )
    
}

export default CardImage;