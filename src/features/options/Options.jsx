import React from "react";

const Options = () => {
  return (
    <div className="flex gap-7">
      <p className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md  cursor-pointer text-white font-semibold">
        Ans
      </p>
      <div className="flex flex-col text-xl">
        {[...new Array(4)].map((_, i) => (
          <div className="flex items-center justify-center gap-5 ">
            <input className="cursor-pointer" name="answer" type="radio" />
            <label>Answer {i}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
