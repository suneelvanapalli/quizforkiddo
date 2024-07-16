import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
//import QUESTIONS from '../assets/questions';
import { useState } from 'react';

export default function Question({
  QUESTIONS,
  index,
  onSelectAnswer,
  onNullAnswerSelection,
}) {
  const [answer, setAnswer] = useState<{
    selectedAnswer: string;
    isCorrect: boolean | null;
  }>({
    selectedAnswer: '',
    isCorrect: null,
  });

  function handleSelectedAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });
    }, 2000);
    onSelectAnswer(answer);
  }

  let answerState = '';
  if (answer.selectedAnswer) {
    answerState = 'answered';
    if (answer.isCorrect) {
      answerState = 'correct';
    } else {
      answerState = 'wrong';
    }
  }
  return (
    <div id='question'>
      <h2>
        {index + 1}/{QUESTIONS.length}
      </h2>
      <QuestionTimer
        timeout={20000}
        onTimeOutComplete={onNullAnswerSelection}
      ></QuestionTimer>
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        selectedAnswer={answer}
        onSelect={handleSelectedAnswer}
      ></Answers>
    </div>
  );
}
