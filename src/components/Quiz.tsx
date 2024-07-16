import { useCallback, useEffect, useRef, useState } from 'react';
//import QUESTIONS from '../assets/questions';
import quizCompletedImg from '../assets/quiz-complete.png';
import Question from './Question';

export default function Quiz({ QUESTIONS }) {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  // const [answerState, setAnswerState] = useState('');
  let activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const calculateResult = function () {
    let correctAnswerCount = 0;
    let incorrectAnswers: { questionText: string; answerText: string }[] = [];
    for (let index = 0; index < QUESTIONS.length; index++) {
      if (userAnswers[index] === QUESTIONS[index].answers[0]) {
        correctAnswerCount++;
      } else {
        incorrectAnswers.push({
          questionText: QUESTIONS[index].text,
          answerText: QUESTIONS[index].answers[0],
        });
      }
    }
    return { correctAnswerCount, incorrectAnswers };
  };

  let handleUserAnswer = useCallback(
    function handleUserAnswer(selectedAnswer) {
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });
    },
    [activeQuestionIndex]
  );

  let handleNullAnswerSelection = useCallback(() => {
    handleUserAnswer(null);
  }, [handleUserAnswer]);

  if (quizIsComplete) {
    const result = calculateResult();
    return (
      <div id='summary'>
        <img src={quizCompletedImg} alt='trophy-icon'></img>
        <h2>Quiz is completed!</h2>
        <p>
          {result.correctAnswerCount} correct of {QUESTIONS.length}
        </p>
        <p>Here are the wrong answers</p>
        {result.incorrectAnswers.map((ans) => {
          return (
            <p>
              {ans.questionText}: {ans.answerText}
            </p>
          );
        })}
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        QUESTIONS={QUESTIONS}
        index={activeQuestionIndex}
        onSelectAnswer={handleUserAnswer}
        onNullAnswerSelection={handleNullAnswerSelection}
      ></Question>
    </div>
  );
}

// test
