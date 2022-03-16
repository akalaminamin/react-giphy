import React from "react";

const FeaturedCard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-gray-800 text-2xl font-bold mb-6">
      Featured GIFs
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col text-center cursor-pointer">
          <div className="w-full h-auto shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://c.tenor.com/7EBFhuwL5V4AAAAM/eye-roll-david.gif"
              alt="trend image"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-xl py-3">
            Trend Card
          </h2>
        </div>
        <div className="flex flex-col text-center">
          <div className="w-full h-auto shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://c.tenor.com/7EBFhuwL5V4AAAAM/eye-roll-david.gif"
              alt="trend image"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-xl py-3">
            Trend Card
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
