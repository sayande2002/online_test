import React, { useEffect } from "react";

const ResultPage = () => {
  useEffect(() => {
    if (document.fullscreen) {
      document.exitFullscreen();
    }
  }, []);
  return <div>ResultPage</div>;
};

export default ResultPage;
