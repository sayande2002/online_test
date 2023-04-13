import React from "react";
import Analytics from "features/analytics/Analytics";
import Number from "features/number/Number";
import Questions from "features/questions/Questions";

const TestPage = () => {
  return (
    <div>
      <Analytics />
      <div className="flex flex-col md:flex-row">
        <Questions />
        <Number />
      </div>
    </div>
  );
};

export default TestPage;
