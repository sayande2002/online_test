import Button from "components/button";
import Options from "features/options/Options";
import React from "react";

const Questions = () => {
  return (
    <div className="flex flex-col w-full md:w-3/4 m-6 gap-4">
      <div className="flex gap-5 justify-center ">
        <p className="flex items-center justify-center h-10 w-16 bg-red-500 rounded-md  cursor-pointer text-white font-semibold">
          Q1
        </p>
        <p className="font-semibold text-xl break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          laudantium ex quos eos est dolorum delectus ad sint sunt optio velit
          dolore quia, perspiciatis ducimus ut, omnis id consequatur
          praesentium?
        </p>
      </div>
      <Options />
      <div className="flex gap-4 items-center justify-center">
        <Button buttonType="blue" className="w-44">
          Previous
        </Button>
        <Button buttonType="blue" className="w-44">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Questions;
