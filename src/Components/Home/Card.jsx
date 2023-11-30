import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const { _id, image, name, price, participator, description } = data || {};
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="p-3 w-[50%] h-[250px]">
        <img className="rounded-xl w-full h-full" src={image} />
      </div>
      <div className="flex flex-col w-[50%] items-start justify-evenly">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-left">{description?.slice(0,70)} ...</p>
        <p>Price: {price}</p>
        <p>Perticepent: {participator}</p>
        <div className="card-actions w-full">
          <Link to={`/contetst/${_id}`}>
            <button className="p-1 my rounded-md px-2 bg-green-500">
              See More!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
