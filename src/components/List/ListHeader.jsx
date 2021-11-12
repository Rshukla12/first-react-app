import style from "./ListHeader.module.css";

const ListHeader = (props) => {
    const {title} = props;
    return(
        <h4 className={ style.title }> { title } </h4>
    )
};

export default ListHeader;