const Card = () => {
  return (
    // <div className="grid grid-cols-2 gap-10">
    //     <img style={{aspectRatio:"1:2"}} className="" src="https://i.ibb.co/M8zh8Gm/8.png"/>
    //     <div className="">
    //         <h1>Title</h1>
    //         <h3>designation</h3>
    //         <p>description</p>
    //         <button>See More!</button>
    //     </div>
    // </div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="p-3">
        <img
        className="rounded-xl h-full"
          src="https://i.ibb.co/M8zh8Gm/8.png"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions w-full">
          <button className="btn w-full btn-primary">See More!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
