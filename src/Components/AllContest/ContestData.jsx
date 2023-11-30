/* eslint-disable react/prop-types */
import Card from "../Home/Card";
import Spiner from "../Shared/Spiner";

const ContestData = ({ data, isLoading }) => {
  return (
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

export default ContestData;
