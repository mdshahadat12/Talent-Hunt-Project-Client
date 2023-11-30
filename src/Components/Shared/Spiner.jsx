import { Watch } from  'react-loader-spinner'
const Spiner = () => {
  return (
    <div className='h-[500px] w-full flex justify-center items-center'>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Spiner;
