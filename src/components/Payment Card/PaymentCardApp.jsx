import PaymentCard from "./PaymentCard";

const PaymentCardApp = () => {
    const amazonCard = {
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
        title: "Amazon Gift Pay",
        systems: "Desktop - Mobile",
        bgColor: "#FFA500",
        date: "28/10/2020"
    };

    const appleCard = {
        img: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
        title: "Apple Gift Payment",
        date: "17 Sep 2020",
        systems: "MacOS - Mobile",
        bgColor: "#f1f1f1"
    }
    return (
        <div>
            <PaymentCard
                key={1}
                logo={amazonCard.img}
                title={amazonCard.title}
                systems={amazonCard.systems}
                bgColor={amazonCard.bgColor}
                date={amazonCard.date}
            />
            <PaymentCard
                key={2}
                logo={appleCard.img}
                title={appleCard.title}
                systems={appleCard.systems}
                bgColor={appleCard.bgColor}
                date={appleCard.date}
            />
        </div>
    )

};

export default PaymentCardApp;