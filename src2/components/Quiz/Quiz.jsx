import React, { useState } from "react";
import { Question } from "../Question/Question";

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedId) => {
    setSelectedAnswer(selectedId); 
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null); 
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div className="quiz-result">
          <p>Twój wynik: {score} / {questions.length}</p>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Spróbuj jeszcze raz
          </button>
        </div>
      ) : (
        <>
          <div className="question-number">
            Pytanie {currentQuestionIndex + 1}/{questions.length}
          </div>

          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
          />

          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null} 
          >
            Dalej
          </button>
        </>
      )}
    </div>
  );
}

export { Quiz };
