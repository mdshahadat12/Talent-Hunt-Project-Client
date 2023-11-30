import Banner from "../Components/Home/Banner";
import BestCreator from "../Components/Home/BestCreator";
import CardContainer from "../Components/Home/CardContainer";


const Home = () => {
    return (
        <div>
            <Banner/>
            <h1 className="text-center font-bold text-4xl my-5">Best Contest</h1>
                <hr />
            <CardContainer/>
            <div className="max-w-7xl my-10">
                <h1 className="text-center font-bold text-4xl my-5">Customer Review</h1>
                <hr />
            <BestCreator/>
            </div>
        </div>
    );
};

export default Home;