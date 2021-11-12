import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import style from "./List.module.css";

function List(){
    return(
        <div className={style.List}>
            <ListHeader title = "Shop By Category" />
            <ListItems />
        </div>
    )
}

export default List;