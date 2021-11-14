import React from "react";
import CardIcon from "./CardIcon";
import DishDetails from "./DishDetails";
import CardPrice from "./CardPrice";
import OrderButton from "./OrderButton";
import style from "./CardDetail.module.css";

const CardDetail = (props) => {
    const {title, details} = props;
    const {iconCount, detail} = details;
    const icons = [];
    for ( let i = 0; i < iconCount; i++ ){
        icons.push(<CardIcon />);
    }

    return (
        <div className={style.CardDetail}>        
            <div className={style.Header}>
                <h1>{title}</h1>
                <div>
                    {icons}
                </div>
               
            </div>
            <div className={style.DishDetail}>
                {detail}
            </div>
            <DishDetails details={details} />
            <div className={style.Footer}>
                <CardPrice details={details} />
                <OrderButton details={details} />
            </div>
        </div>
    )
}

export default CardDetail;