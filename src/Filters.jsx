import React, { useState } from "react";
import Roles from "./Roles";

export default function Filters() {
  const [selectedFilter, setSelectedFilter] = useState("correct"); // State to track the selected filter

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <div className="flex justify-center my-4 gap-2 px-2">
        <button
          className={`bg-slate-50 hover:bg-violet-200 text-black font-bold py-1 px-2 rounded  ${
            selectedFilter === "correct" ? "border-2 border-violet-500 bg-violet-100" : ""
          }`}
          onClick={() => handleFilterClick("correct")}
        >
          Correct Roles
        </button>

        <button
          className={`bg-slate-50 hover:bg-violet-200 text-black font-bold py-1 px-2 rounded  ${
            selectedFilter === "random" ? "border-2 border-violet-500 bg-violet-100" : ""
          }`}
          onClick={() => handleFilterClick("random")}
        >
          Random Roles
        </button>
      </div>
      <Roles selectedFilter={selectedFilter}/>


    </>
  );
}