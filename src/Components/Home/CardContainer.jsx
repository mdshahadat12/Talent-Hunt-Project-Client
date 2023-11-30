import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { BestContest } from "../../API/Contest";
import Spiner from "../Shared/Spiner";


const CardContainer = () => {
    const {data=[],isLoading} = useQuery({
        queryKey:['bestContest'],
        queryFn: async()=>{
          const data = await BestContest()
          console.log('bestContest',data);
          return data
        }
      })
    return data && (
        <div>
      {isLoading ? (
        <Spiner></Spiner>
      ) : (
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-5">
          {data?.map((data) => (
            <Card data={data} key={data._id}></Card>
          ))}
        </div>
      )}
    </div>
    );
};

export default CardContainer;