import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
const TrendCard = () => {
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "7sjuTLOBnXyMYjyjwFIljFbYuP23jW7s",
      },
    });
    setGiphy(response.data.data);
    setLoading(false);
  }, []);

  console.log(loading, giphy);
  return (
    <div className="container">
      <h1 className="text-gray-800 text-2xl font-bold mb-6">
        Trending Tenor Searches
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
        {loading ? (
          <Loader />
        ) : (
          giphy.slice(0, 10).map((gip) => (
            <div
              className="flex flex-col text-center cursor-pointer"
              key={gip.id}
            >
              <div className="w-full h-36 shadow-lg">
                <img
                  className="w-full h-full"
                  src={gip?.images?.fixed_height?.url}
                  alt="trend image"
                />
              </div>
              <h2 className="text-gray-700 font-semibold text-md py-3">
                {gip.title}
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrendCard;
