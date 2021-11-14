import React from "react";
import Card from "./Card";
import style from "./Menu.module.css";

const menu = [
    {
        imgSrc: "https://via.placeholder.com/400",
        title: "Pepperoni Pizza",
        details: {
            detail: "Premium pepproni and cheese is Made with real mozzarella on original hand-tossed crust.",
            cal: 265,
            p: 12,
            f: 10,
            c: 31,
            temp: 53.8,
            oldPrice: "29.90",
            newPrice: "23.90",
            iconCount: 2
        }
    },
    {
        imgSrc: "https://via.placeholder.com/400",
        title: "Tortellini",
        details: {
            detail: "Pasta stuffed with beef and pork topped with your choice of cream with bacon, bolognese or marinara sauce.",
            cal: 270,
            p: 18,
            f: 4,
            c: 41,
            temp: 42.4,
            oldPrice: "29.90",
            newPrice: "17.90",
            iconCount: 3
        }
    },
    {
        imgSrc: "https://via.placeholder.com/400",
        title: "Strawberry Cake",
        details: {
            detail: "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.",
            cal: 346,
            p: 6,
            f: 14,
            c: 49,
            temp: 13.9,
            oldPrice: "18.90",
            newPrice: "13.90",
            iconCount: 1
        }
    }
]

const Menu = () => {
    return (
        <div className={style.Menu} >
            {menu.map( el => (
                <Card imgSrc={el.imgSrc} title={el.title} details={el.details} />
            ))}
        </div>
    )
}

export default Menu;