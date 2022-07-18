import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

import css from "./answers.module.css";

export default function Answers({
  currentQNumber,
  QAMatrix,
  hasGuessed,
  setHasGuessed,
  setScore,
}) {
  const [answers, setAnswers] = useState();

  useEffect(() => {
    function randomizeAnswers() {
      setAnswers(
        randomize([
          { answer: QAMatrix[currentQNumber].correctAnswer, correct: true },
          { answer: QAMatrix[currentQNumber].WrongAnswers[0], correct: false },
          { answer: QAMatrix[currentQNumber].WrongAnswers[1], correct: false },
          { answer: QAMatrix[currentQNumber].WrongAnswers[2], correct: false },
        ])
      );
    }
    randomizeAnswers();
  }, [currentQNumber, QAMatrix]);

  function handleClick(e) {
    console.log(e);
    setHasGuessed(true);
    if (e.target.value === "true") {
      setScore((prevState) => prevState + 1);
    }
  }

  // randomizes an array
  function randomize(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  if (answers) {
    return (
      <div className={css.answers}>
        {answers.map((obj) => {
          return (
            <button
              className={css.answer}
              style={{
                backgroundColor:
                  hasGuessed && obj.correct === true ? "green" : "white",
              }}
              value={obj.correct}
              disabled= {hasGuessed} 
              onClick={handleClick}
            >
              {obj.answer}
            </button>
          );
        })}
      </div>
    );
  }
}
