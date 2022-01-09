import styles from "./PaymentCard.module.css";

const PaymentCard = ({
    date,
    logo,
    title,
    systems,
    bgColor
}) => {

    return (
        <div className={styles.root} style={{backgroundColor: bgColor}}>
            <div>
                <h3>{date}</h3>
                <div>Case Study</div>
                <h1>{title}</h1>
                <h3>{systems}</h3>
            </div>
            <div>
                <div>
                    <img className={styles.logo} src={logo} alt={title + logo} />
                </div>
                <div>&#8594;</div>
            </div>
        </div>
    );
};

export default PaymentCard;