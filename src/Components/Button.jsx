import React from "react";

function Button({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="my-12  btn w-96  inline-flex items-center justify-center border-none p-3 m-0 mb-4 bg-btnColor text-sm font-semibold rounded-lg cursor-pointer relative overflow-hidden text-center transition-all delay-150 ease-linear w-46"
    >
      <span className="hover:-translate-x-1 bg-btnColor transition-transform delay-150 ease-linear inline-block">
        {text}
      </span>
    </div>
  );
}

export default Button;
