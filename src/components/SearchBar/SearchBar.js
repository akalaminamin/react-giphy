import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="container h-[40px] flex justify-center px-4 sm:px-6 lg:px-8 sticky top-0 mb-16">
        <div className="z-50 w-11/12">
          <div className="relative w-full">
            <input
              type="text"
              className="h-14 w-full pr-8 pl-5 rounded z-0 shadow-md focus:shadow focus:outline-none bg-white"
              placeholder="Search anything..."
            />
            <div className="absolute top-[18px] right-3 cursor-pointer">
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
