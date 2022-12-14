import React from "react";

//components
import RecommendedItem from "./recommendedItem";

const Recommended = () => {
  return (
    <div className="px-2 py-2">
      <h1 className="px-4 py-2 text-2xl">Trending Now</h1>
      <div className="flex flex-row flex-wrap ">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </div>
    </div>
  );
};

export default Recommended;