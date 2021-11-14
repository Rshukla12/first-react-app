import React from "react";
import style from "./CardIcon.module.css";

const CardIcon = ({info, iconSrc}) => {
    iconSrc = iconSrc || "https://via.placeholder.com/60";
    if ( info ){
        return (
            <div className={style.Info}>
                i
            </div>
        )
    }
    return (
        <img src={iconSrc} alt="icon" className={style.CardIcon}/>
    )
} 

export default CardIcon;