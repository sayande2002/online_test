import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const Dataprovider = ({ children }) => {
  const [question, setQuestion] = useState([]);
  const [qno, setQno] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState([...new Array(pageNumber)]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/getAllQuestion?page=${qno}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data.question);
        setOptions(data.question[0].options);
        setPageNumber(data.totalcountQuestion);
      });
  }, [qno]);
  return (
    <DataContext.Provider
      value={{
        question,
        qno,
        setQno,
        options,
        pageNumber,
        answer,
        setAnswer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
