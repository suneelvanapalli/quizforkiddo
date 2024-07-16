import { useEffect, useRef, useState } from 'react';

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef<string[]>();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        return (
          <li key={answer} className='answer'>
            <button
              onClick={() => {
                onSelect(answer);
              }}
              className={isSelected ? answerState : ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
// test commit to verify skip ci