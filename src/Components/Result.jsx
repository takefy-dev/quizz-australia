import React from "react";

function Result({ score }) {
  return (
    <div className="my-2 res-btn w-96  inline-flex items-center justify-center border-none p-3 m-0 mb-4 bg-resultColor text-sm font-semibold rounded-lg cursor-pointer relative overflow-hidden text-center transition-all delay-150 ease-linear w-46">
      <span className="hover:-translate-x-1 bg-resultColor transition-transform delay-150 ease-linear inline-block">
        Here are your score: {score} <br/> The correction is display above by white tick
      </span>
    </div>
  );
}

export default Result;
