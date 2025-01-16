import React from "react";
import { QuestionOption } from "../QuestionOption/QuestionOption";

function Question({ question, onAnswer, selectedAnswer }) {
  return (
    <div className="question">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option) => (
          <QuestionOption
            key={option.id}
            option={option}
            onAnswer={onAnswer}
            isSelected={selectedAnswer === option.id} 
          />
        ))}
      </div>
    </div>
  );
}

export { Question };
