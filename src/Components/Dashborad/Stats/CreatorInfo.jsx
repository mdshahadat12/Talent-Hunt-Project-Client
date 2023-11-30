import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa6";
import { AllContestData } from "../../../API/Contest";
import useAuth from "../../../Hooks/useAuth";


const CreatorInfo = () => {
  const {user} = useAuth()
  const {
    data = [],
  } = useQuery({
    queryKey: ["Contest", user?.email],
    queryFn: async () => {
      const data = await AllContestData(user?.email);
      console.log(data);
      return data;
    },
  });
    return (
        <>
    <div className='w-fit mx-auto'>
      <h1 className='text-center p-2 m-2 border-b border-black text-xl'>You Can Add Contest!😍</h1>
    </div>
    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <FaUsers className='text-3xl absolute ml-10 top-[25%]' />
            <div className='p-4 mr-10 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Your Added Contest
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {data.length}
              </h4>
            </div>
          </div>
          </>
    );
};

export default CreatorInfo;