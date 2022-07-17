import { useState } from "react";

export default function Answers({
  currentQNumber,
  QAMatrix,
  hasGuessed,
  setHasGuessed,
}) {
  const [answers, setAnswers] = useState(
    randomize([
      {answer: QAMatrix[currentQNumber].correctAnswer, correct: true},
      {answer: QAMatrix[currentQNumber].WrongAnswers[0], correct: false},
      {answer: QAMatrix[currentQNumber].WrongAnswers[1], correct: false},
      {answer: QAMatrix[currentQNumber].WrongAnswers[2], correct: false},
    ])
  );

  function handleClick(e) {
    setHasGuessed(true);
  }

  function randomize(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="answers">
      {answers.map((obj) => {
        return(<button onClick={(handleClick)}>{obj.answer}</button>)
      })}
    </div>
  );
}
