import "./NextQuestionButton.css";

const NextQuestionButton = ({ goToNextQuestion }) => {
  return (
    <button className="next-button" onClick={goToNextQuestion}>
      Następne pytanie
    </button>
  );
};

export default NextQuestionButton;
