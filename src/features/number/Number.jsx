import React, { useContext, useState } from "react";
import Button from "components/button";
import { DataContext } from "context/dataContext";
import { Link } from "react-router-dom";

const Number = () => {
  const [number, setNumber] = useState([]);
  const { setQno, pageNumber } = useContext(DataContext);
  const clickHandler = (n) => {
    setNumber([...number, n]);
    setQno(n);
  };
  return (
    <div className="w-full md:w-1/4 flex items-center flex-col gap-5 bg-blue-100 p-6">
      {/* {number} */}
      <h2 className="text-center text-3xl font-black">Questions</h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {[...new Array(pageNumber)].map((_, i) => (
          <span
            key={i}
            onClick={() => clickHandler(i + 1)}
            className="flex flex-wrap items-center justify-center h-10 w-10 bg-blue-500 rounded-md hover:bg-blue-300 cursor-pointer text-white font-semibold"
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 font-semibold">
          <span className="h-6 w-6  bg-blue-500 rounded-md" />
          <p>Not Visited</p>
        </div>
        <div className="flex gap-1 font-semibold">
          <span className="h-6 w-6  bg-green-500 rounded-md" />
          <p>Answered</p>
        </div>
        <div className="flex gap-1 font-semibold">
          <span className="h-6 w-6  bg-red-500 rounded-md" />
          <p>Skipped</p>
        </div>
      </div>
      <Link to="/result">
        <Button buttonType="google" className="w-44">
          Finish Exam
        </Button>
      </Link>
    </div>
  );
};

export default Number;
