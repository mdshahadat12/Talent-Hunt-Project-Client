import { FaUsers } from "react-icons/fa6";


const CreatorInfo = () => {
    return (
        <>
    <div className='w-fit mx-auto'>
      <h1 className='text-center p-2 m-2 border-b border-black text-xl'>You Can Add Contest!😍</h1>
    </div>
    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <FaUsers className='text-3xl absolute ml-10 top-[25%]' />
            <div className='p-4 mr-10 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Contest
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                454
              </h4>
            </div>
          </div>
          </>
    );
};

export default CreatorInfo;