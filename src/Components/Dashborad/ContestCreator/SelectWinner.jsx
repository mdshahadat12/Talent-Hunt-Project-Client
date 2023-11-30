import { useParams } from "react-router-dom";
import Spiner from "../../Shared/Spiner";
import { useQuery } from "@tanstack/react-query";
import { GetWinner, UpdateWinner } from "../../../API/Contest";
import { toast } from "react-toastify";


const SelectWinner = () => {
    const {id} = useParams()
    console.log(id);
    const {
        data = [],
        isLoading
      } = useQuery({
        queryKey: ["Contest", id],
        queryFn: async () => {
            console.log(id);
          const data = await GetWinner(id);
          console.log(data);
          return data;
        },
      });
      const handlewinner = (email,id)=>{
        UpdateWinner(email,id)
        .then(res=>{
            console.log(res);
            if(res.modifiedCount){
                toast.success('succesfull')
            }
        })
      }
    return isLoading?<Spiner/>: (
        <div>
            <div>
          <h1 className="text-center font-bold text-4xl my-5">Select Winner</h1>
                <hr />
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>S:</th>
                  <th>Name</th>
                  <th>Perticipents</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((data, idx) => (
                  <tr key={data._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="font-bold">{data.name}</div>
                    </td>
                    <td>{data.participentEmail}</td>
                    <td>
                        {data.winner?
                      <button disabled className="btn btn-xs">Winner</button>
                      :
                      <button onClick={()=>handlewinner(data.participentEmail,data.mainId)} className="btn btn-xs">Winner</button>
                    }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
};

export default SelectWinner;