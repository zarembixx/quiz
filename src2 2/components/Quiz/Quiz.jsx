import React, { useState } from "react";
import { Question } from "../Question/Question";
import { Review } from "../Review/Review";

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showReview, setShowReview] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedId) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = selectedId;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex] === currentQuestion.correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowReview(false);
    setScore(0);
  };

  const handleReviewAnswers = () => {
    setShowReview(true);
  };

  return (
    <div className="quiz">
      {showReview ? (
        <Review
          questions={questions}
          selectedAnswers={selectedAnswers}
          onRestart={handleRestartQuiz}
        />
      ) : showResult ? (
        <div className="quiz-result">
          <p>Twój wynik: {score} / {questions.length}</p>
          <button className="review-button" onClick={handleReviewAnswers}>
            Zobacz odpowiedzi
          </button>
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
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
          />
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
          >
            Dalej
          </button>
        </>
      )}
    </div>
  );
}

export { Quiz };
