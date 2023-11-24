import Banner from "../Components/Home/Banner";
import BestCreator from "../Components/Home/BestCreator";
import CardContainer from "../Components/Home/CardContainer";


const Home = () => {
    return (
        <div>
            {/* <div className="h-screen bg-slate-400"></div> */}
            <Banner/>
            <CardContainer/>
            <div className="max-w-7xl my-10">
            <BestCreator/>
            </div>
            This is Home
        </div>
    );
};

export default Home;