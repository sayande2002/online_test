import React, { useContext, useState } from "react";
import { DataContext } from "context/dataContext";

const Options = () => {
  const { options, answer, setAnswer } = useContext(DataContext);

  const handleChange = (i, event) => {
    const { value } = event.target;
    // setAnswer([...answer, (answer[i] = value)]);
    console.log(value);
    console.log(answer);
  };

  return (
    <div className="flex gap-7">
      <p className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md  cursor-pointer text-white font-semibold">
        Ans
      </p>
      <div className="flex flex-col items-start text-xl">
        {options.map((n, i) => (
          <div key={i} className="flex items-center justify-center gap-5">
            <input
              value={n}
              className="cursor-pointer"
              name="answer"
              type="radio"
              onChange={(e) => handleChange(i, e)}
              id="radio"
            />
            <label>{n}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
