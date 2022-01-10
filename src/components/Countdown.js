import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState();
  const [useDate, setDate] = useState();
  const timerComponents = [];

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(timeLeft);
      if (useDate) dateParser();
    }, 1000);
  }, [timeLeft]);

  const dateParser = () => {
    const difference = new Date(useDate) - new Date()
    setTimeLeft(Calculation(difference));
  };

  const changeDate = (e) => {
    console.log(Date.now())
    const difference = new Date(e.currentTarget.value) - new Date()
    if (difference > 0) {
      setTimeLeft(Calculation(difference));
    } else {
      alert("Wrong date. Choose other")
    }
    setDate(e.currentTarget.value);
  };

  if (timeLeft) {
    Object.keys(timeLeft).map((interval, index) => {
      if (timeLeft[interval]) {
        timerComponents.push(
          <span key={index}>
            {timeLeft[interval]} {interval}
          </span>
        );
      }
      return null;
    });
  }

  return (
    <div className="bg-image">
      <div className="shadow-background">
        <div className="countdown-header">
          <h1>Choose date</h1>
          <input
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={(date) => changeDate(date)}
          />
        </div>
        <div id="countdown-container" className="countdown-container">
          {timeLeft ? (
            timerComponents.length ? (
              timerComponents
            ) : (
              <span>It's today!</span>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
