import { useEffect, useState } from "react";
import Card from "../Components/Home/Card";
// import AllCard from "../Components/AllFood/AllCard";
// import { Helmet } from "react-helmet-async";
// import Loading from "../Components/Loading";

const AllContest = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [IsLoading,setLoading] = useState(true)
  const [data, setData] = useState([]);
  // const [searchdata, setsearchData] = useState([]);
  const [count, setCount] = useState(0);
  const itemPerPage = 9;
  const pageNumber = Math.ceil(count.result / itemPerPage);
  const pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }
  // console.log(pages);
  const prevBtn = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
    }
  };
  const nextBtn = () => {
    if (currentpage < pageNumber) {
      setCurrentpage(currentpage + 1);
    }
  };
  // useEffect(() => {
  //   fetch(
  //     `https://royal-food-server.vercel.app/api/v1/allFood?pageNum=${
  //       currentpage - 1
  //     }&limit=${itemPerPage}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     });

  //   fetch("https://royal-food-server.vercel.app/api/v1/foodcount")
  //     .then((res) => res.json())
  //     .then((data) => setCount(data));
  // }, [currentpage, pageNumber]);
  // console.log(count);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);
    fetch("https://royal-food-server.vercel.app/api/v1/allFood")
      .then((res) => res.json())
      .then((data) => {
        // setsearchData(data)
        setLoading(false)
        const filterData = data?.filter(
          (data) => data.name.includes(value) == true
          );
          setData(filterData);
          console.log(filterData);
        });
    // setCount(filterData.length)
  };

  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl mt-5 font-bold">All Contest!</h1>
      {/* <Helmet>
        <title>Royal Food || All Food</title>
      </Helmet> */}
      <div className="text-center">
        <form onSubmit={handleSearch}>
          <input
            className="p-2 w-[400px] border-2 border-green-700 rounded-lg"
            type="text"
            placeholder="Search"
            name="search"
          />
          <input
            className="p-2 mx-2 px-4 border-2 border-green-500 hover:border-green-700 cursor-pointer bg-green-500 rounded-lg mt-4 text-white font-semibold"
            type="submit"
            value="Search"
          />
        </form>
        
      </div>
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      {/* {
        IsLoading?<Loading></Loading>:
        <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-5">
        {data?.map((data) => (
          <AllCard data={data} key={data._id}></AllCard>
        ))}
      </div>
      } */}
      <div className="flex justify-center">
        <button onClick={prevBtn} className="btn mr-3 hover:bg-green-700">
          PREV
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentpage(page)}
            key={page}
            className={`${
              currentpage == page && "bg-green-500"
            } hover:bg-green-700 btn mr-3`}
          >
            {page}
          </button>
        ))}
        <button onClick={nextBtn} className="btn hover:bg-green-700">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default AllContest;
