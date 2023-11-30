import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa6";
import { GiBrasero } from "react-icons/gi";
import Spiner from "../../Shared/Spiner";
import { AllContestCount } from "../../../API/Contest";
import { AllUserCount } from "../../../API/UserAPI";

const AdminStats = () => {
  const {data={},isLoading} = useQuery({
    queryKey:['UserCount','ContestCount'],
    queryFn: async()=>{
      const contest = await AllContestCount()
      const user = await AllUserCount()
      const data = {
        user:user.result,
        contest:contest.result
      }
      console.log(data);
      return data
    }
  })
  const {user=0,contest=0} = data;
  return (
    <>
      {
        isLoading?
        <Spiner/>
        :
        <>
        <div className="w-fit mx-auto">
        <h1 className="text-center p-2 m-2 border-b border-black text-xl">
          You are a Admin!😍
        </h1>
      </div>
      <div className="relative flex flex-col mt-5 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className="flex gap-10 absolute ml-10 top-[25%]">
          <FaUsers className="text-3xl" />
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          Total User
          </h4>
        </div>

        <div className="p-4 mr-10 text-right">
          
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
            {user}
          </h4>
        </div>
      </div>
      <div className="relative flex flex-col mt-5 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className="flex gap-10 absolute ml-10 top-[25%]">
          <GiBrasero className="text-3xl" />
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          Total Contest
          </h4>
        </div>

        <div className="p-4 mr-10 text-right">
          
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
            {contest}
          </h4>
        </div>
      </div>
      </>
      }
    </>
  );
};

export default AdminStats;
