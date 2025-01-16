import React from "react";
import "./Review.css";

function Review({ questions, selectedAnswers, onRestart }) {
  return (
    <div className="review">
      <h2>Przegląd odpowiedzi</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="review-item">
            <p>
              <strong>Pytanie {index + 1}:</strong> {question.text}
            </p>
            <p>
              <strong>Twoja odpowiedź:</strong>{" "}
              {selectedAnswers[index]
                ? question.options.find(
                    (option) => option.id === selectedAnswers[index]
                  )?.answer
                : "Nie zaznaczono"}
            </p>
            <p>
              <strong>Poprawna odpowiedź:</strong>{" "}
              {
                question.options.find(
                  (option) => option.id === question.correct
                )?.answer
              }
            </p>
          </li>
        ))}
      </ul>
      <button className="restart-button" onClick={onRestart}>
        Zagraj ponownie
      </button>
    </div>
  );
}

export { Review };
