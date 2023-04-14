import React, { useContext } from "react";
import Button from "components/button";
import Options from "features/options/Options";
import { DataContext } from "context/dataContext";

const Questions = () => {
  const { question, qno, setQno, pageNumber } = useContext(DataContext);
  window.addEventListener("blur", () => {
    document.title = "You are Not Allowed";
  });
  window.addEventListener("focus", () => {
    document.title = "Test";
  });

  return (
    <div className="flex flex-col w-full md:w-3/4 m-6 gap-4">
      {question.map(({ _id, QuestionNumber, question }) => (
        <div key={_id} className="flex gap-5">
          <p className="flex items-center justify-center h-10 w-10 bg-red-500 rounded-md  cursor-pointer text-white font-semibold">
            {QuestionNumber}
          </p>
          <p className="font-semibold text-xl break-words">{question}</p>
        </div>
      ))}

      <Options question={question} />

      <div className="flex gap-4 items-center justify-center">
        <Button
          buttonType="blue"
          disabled={qno === 1 ? true : false}
          className={`w-44 ${
            qno === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => setQno(qno - 1)}
        >
          Previous
        </Button>
        <Button
          buttonType="blue"
          disabled={qno === pageNumber ? true : false}
          className={`w-44 ${
            qno === pageNumber ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => setQno(qno + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Questions;
