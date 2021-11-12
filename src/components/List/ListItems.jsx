import CategoryItems from "./CategoryItem";
import style from "./ListItems.module.css";

const ListItems = props => {
    return (
        <div className={style.ListItems}>
            <CategoryItems label="Fresh" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg" />
            <CategoryItems label="Mobiles" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" />
            <CategoryItems label="Fashion" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" />
            <CategoryItems label="Electronics" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" />
        </div>
    )
}

export default ListItems;