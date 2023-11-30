// import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { GetOneContest } from "../../API/Contest";
import { useQuery } from "@tanstack/react-query";
import Spiner from "../Shared/Spiner";
import Payment from "./Payment";
import { useState } from "react";

const CardDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = ()=>setIsOpen(false)
  const openModal = ()=>setIsOpen(true)

  const id = useParams().id;
  console.log(id);
  const { data = [], isLoading } = useQuery({
    queryKey: ["contest",id],
    queryFn: async () => {
      const data = await GetOneContest(id);
      console.log("contest details", data);
      return data;
    },
  });
  console.log(data);
  // const now = new Date()
  // console.log(now);
  const { image, price,prizemoney, participator,winer,deadline, name, description, type } = data;
  return (
    <div>
      {/* <Helmet>
        <title>Royal Food || Details</title>
      </Helmet> */}
      {
        isLoading? 
        <Spiner/>
        :
        <div>
        <div className="md:grid mt-24 md:grid-cols-6">
          <img
            className="w-full border-2 border-green-400 md:col-span-4 md:h-[450px] rounded-lg"
            src={image}
            alt=""
          />
          <div className="md:col-span-2 flex flex-col md:ml-20 justify-center">
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Name: {name}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Price: ${price}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Peize Money: ${prizemoney}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Type: {type}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
            Participation: {participator}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
            Winer: {winer?.name?winer?.name:"Nobody"}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
            Deadline: {deadline}
            </h1>
              <button 
              onClick={openModal}
              className="font-semibold w-full my-3 bg-green-600 rounded-lg py-2 text-white cursor-pointer text-lg">
                 Participate
              </button>
          </div>
        </div>
        <h1 className="text-xl font-semibold border-b-2 border-black pb-5 my-7">
          {name}
        </h1>
        <p className="text-gray-700 mb-10">{description}</p>
      </div>
      }
      <Payment data={data} closeModal={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default CardDetails;
