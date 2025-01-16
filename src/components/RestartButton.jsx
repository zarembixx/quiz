import React from "react";
import "./RestartButton.css";

function RestartButton({ onRestart }) {
  return (
    <button className="restart-button" onClick={onRestart}>
      Spróbuj jeszcze raz
    </button>
  );
}

export default RestartButton;
