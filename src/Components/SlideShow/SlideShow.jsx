import React, { useState } from "react";
import "./SlideShow.css";
const SlideShow = () => {
  const [contentIndex, setContentIndex] = useState(0); // Initial index of content

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
  const isRestartDisabled = contentIndex === 0;
  const isPrevDisabled = contentIndex === 0;
  const isNextDisabled = contentIndex === Maincontents.length - 1;
  const changeContentPrev = () => {
    setContentIndex(contentIndex - 1);
  };

  const changeContentNext = () => {
    setContentIndex(contentIndex + 1);
  };

  const restartContent = () => {
    setContentIndex(0);
  };

  return (
    <>
      <div className="ContentContainer">
        <h1 id="headingContent">{Maincontents[contentIndex]}</h1>
        <p id="subHeadingContent">{Subcontents[contentIndex]}</p>
      </div>
      <div className="buttonsContainer">
        <button
          id="restartButton"
          disabled={isRestartDisabled}
          onClick={restartContent}
        >
          Restart Button
        </button>
        <button
          id="prevButton"
          disabled={isPrevDisabled}
          onClick={changeContentPrev}
        >
          Previous Button
        </button>
        <button
          id="nextButton"
          disabled={isNextDisabled}
          onClick={changeContentNext}
        >
          Next Button
        </button>
      </div>
    </>
  );
};
export default SlideShow;
