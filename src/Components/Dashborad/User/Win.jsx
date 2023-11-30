import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { Winnerlist } from "../../../API/UserStats";
import Spiner from "../../Shared/Spiner";
import TableDataWinner from "../../MaterialUI/TableWinner";


const Win = () => {
    const {user} = useAuth()
    const {data=[],isLoading} = useQuery({
        queryKey:['winner',user?.email],
        queryFn: async()=>{
          const data = await Winnerlist(user.email)
          console.log('perticipet user',data);
          return data
        }
      })
    return isLoading ?<Spiner/>: (
        <div>
            <h1 className="text-center font-bold text-4xl my-5">You Win</h1>
                <hr />
            <TableDataWinner data={data}/>
        </div>
    );
};

export default Win;