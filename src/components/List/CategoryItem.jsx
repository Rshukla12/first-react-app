import style from "./CategoryItem.module.css";

const CategoryItems = props => {
    const { label, src } = props;
    return (
        <div className={style.CategoryItems} >
            <img className={style.img} src={ src } alt={ label } />
            <div className={style.font}>
                { label }
            </div>
        </div>
    )
}

export default CategoryItems;