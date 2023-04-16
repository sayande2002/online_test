import { DataContext } from "context/dataContext";
import React, { useContext, useEffect } from "react";
const ResultPage = () => {
  const { answer } = useContext(DataContext);
  const rightAnswer = [0, 2, 4, 1, 3];
  var score = 0;
  useEffect(() => {
    if (document.fullscreen) {
      document.exitFullscreen();
    }
  }, []);
  for (let i = 1; i <= rightAnswer.length; i++) {
    if (rightAnswer[i] === answer[i]) {
      score = score + 1;
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <p className="text-4xl font-bold">Result Page</p>
      <p className="text-xl font-bold">Your marks is {score - 1}</p>
    </div>
  );
};

export default ResultPage;
