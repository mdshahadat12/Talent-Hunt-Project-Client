import { FaUsers } from "react-icons/fa6";
import ChartView from "../User/Chart";
import useAuth from "../../../Hooks/useAuth";
import { Perticipatelist, Winnerlist } from "../../../API/UserStats";
import { useQuery } from "@tanstack/react-query";
import Spiner from "../../Shared/Spiner";


const UserStats = () => {
  const {user} = useAuth()
  const {data=[],isLoading} = useQuery({
      queryKey:['Stats',user?.email],
      queryFn: async()=>{
        const data1 = await Winnerlist(user.email)
        const data2 = await Perticipatelist(user.email)
        console.log('stats user',data);
        return {data1,data2}
      }
    })
    return isLoading? <Spiner/>: (
        <>
    <div className='w-fit mx-auto'>
      <h1 className='text-center p-2 m-2 border-b border-black text-xl'>You are a User!😍</h1>
    </div>
    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <FaUsers className='text-3xl absolute ml-10 top-[25%]' />
            <div className='p-4 mr-10 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Perticipation
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {data.data2.length}
              </h4>
            </div>
          </div>
    <div className='relative flex flex-col my-5 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <FaUsers className='text-3xl absolute ml-10 top-[25%]' />
            <div className='p-4 mr-10 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total win
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
               {data.data1.length}
              </h4>
            </div>
          </div>
          {data && <ChartView perti={data.data2.length} win={data.data1.length}/>}
          </>
    );
};

export default UserStats;