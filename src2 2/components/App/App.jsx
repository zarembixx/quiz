import './App.css';
import { Quiz } from '../Quiz/Quiz';
import { getQuestions } from '../../common/services/getQuestions';

function App() {
  const questions = getQuestions();

  return (
    <div className="app">
      <Quiz questions={questions} />
    </div>
  );
}

export { App };
