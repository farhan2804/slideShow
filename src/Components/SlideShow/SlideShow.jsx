import React, { useState } from "react";
import "./SlideShow.css";
const SlideShow = () => {
  const [contentIndex, setContentIndex] = useState(0); // Initial index of content
  const [restartState, setRestartState] = useState(true);
  const [prevState, setPrevState] = useState(true);
  const [nextState, setNextState] = useState(false);

  const Maincontents = [
    "Today's Workout Plan",
    "First, 10 push-ups",
    "Next, 20 Squats",
    "Finally,15 sit-ups",
    "Great Job",
  ];
  const Subcontents = [
    "We're gonna do 3 fundamental exercises.",
    "Do 10 reps, Dont rush",
    "Squats are important",
    "slightly bend you knees",
    "You Made it, have a nice day",
  ];
  const changeContentNext = () => {
    setRestartState(false);
    setPrevState(false);

    setContentIndex((prevIndex) => {
      if (prevIndex === Maincontents.length - 1) {
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
    if (contentIndex === Maincontents.length - 2) {
      setNextState(true);
    }
  };

  const restartContent = () => {
    setContentIndex(0);
    setRestartState(true);
    setPrevState(true);
    setNextState(false);
  };
  const changeContentPrev = () => {
    setNextState(false);
    setContentIndex((prevIndex) => {
      if (prevIndex === 1) {
        setRestartState(true);
        setPrevState(true);
      }
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <>
      <div className="ContentContainer">
        <h1 id="headingContent">{Maincontents[contentIndex]}</h1>
        <p>{Subcontents[contentIndex]}</p>
      </div>
      <div className="buttonsContainer">
        <button
          id="restartButton"
          disabled={restartState}
          onClick={restartContent}
        >
          Restart Button
        </button>
        <button
          id="prevButton"
          disabled={prevState}
          onClick={changeContentPrev}
        >
          Previous Button
        </button>
        <button
          id="nextButton"
          disabled={nextState}
          onClick={changeContentNext}
        >
          Next Button
        </button>
      </div>
    </>
  );
};
export default SlideShow;
