const Banner = () => {
  const handleSearch = () => {};
  return (
    <div className="mb-10 relative">
      <img className="w-full h-[550px]" src="https://i.ibb.co/M8zh8Gm/8.png" />
      <div className="absolute bg-gray-5 bg-opacity-30 flex inset-y-0 right-0 left-0 items-center">
        <div className="w-full">
          <h1 style={{textShadow:'0 0 6px #FF0000, 0 0 5px #0000FF'}} className="text-xl text-white md:text-5xl font-bold text-center my-5 md:my-10">
            I Grow By Helping People In Need
          </h1>

          <div className="w-[60%] md:w-[40%] mx-auto">
            <form onSubmit={handleSearch}>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  name="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Here..."
                />
                <input
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A] hover:bg-[#ff5353] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
