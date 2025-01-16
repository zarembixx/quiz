import React from "react";

function QuestionOption({ option, onAnswer, isSelected }) {
  return (
    <button
      className={`question-option ${isSelected ? "selected" : ""}`} 
      onClick={() => onAnswer(option.id)} 
    >
      {option.answer}
    </button>
  );
}

export { QuestionOption };
