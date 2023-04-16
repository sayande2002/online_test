import React from "react";
import { useTimer } from "react-timer-hook";
import { toastify } from "./toast";
import { useNavigate } from "react-router-dom";

export const MyTimer = ({ expiryTimestamp }) => {
  const navigate = useNavigate();
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      toastify("Time's Up !", "success");
      navigate("/result");
    },
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div className="text-2xl font-bold">
        {/* <span>{days}</span>: */}
        <span className="bg-blue-500 font-semibold rounded-md text-white px-2">
          {hours}
        </span>
        :
        <span className="bg-blue-500 font-semibold rounded-md text-white px-2">
          {minutes}
        </span>
        :
        <span className="bg-blue-500 font-semibold rounded-md text-white px-2">
          {seconds}
        </span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
    </div>
  );
};

{
  /* <h1>react-timer-hook </h1>
  <p>Timer Demo</p> */
}

{
  /* <button onClick={start}>Start</button>
<button onClick={pause}>Pause</button>
<button onClick={resume}>Resume</button> */
}

{
  /* <button
  onClick={() => {
    // Restarts to 5 minutes timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time);
  }}
>
  Restart
</button> */
}
