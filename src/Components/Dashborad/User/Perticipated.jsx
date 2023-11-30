import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { Perticipatelist } from "../../../API/UserStats";
import Spiner from "../../Shared/Spiner";
import TableData from "../../MaterialUI/table";


const Perticipated = () => {
    const {user} = useAuth()
    const {data=[],isLoading} = useQuery({
        queryKey:['myperticipent',user?.email],
        queryFn: async()=>{
          const data = await Perticipatelist(user.email)
          console.log('perticipet user',data);
          return data
        }
      })
    return isLoading ?<Spiner/>: (
        <div>
           <h1 className="text-center font-bold text-4xl my-5">Your Perticipation</h1>
                <hr />
           <TableData data={data}/>
        </div>
    );
};

export default Perticipated;