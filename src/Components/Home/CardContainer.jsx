import Card from "./Card";


const CardContainer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         <Card/>   
         <Card/>   
         <Card/>   
         <Card/>   
        </div>
    );
};

export default CardContainer;