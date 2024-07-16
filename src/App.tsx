import React, { useState } from 'react';
import Quiz from './components/Quiz';

import QUESTIONS_AUS from './assets/questions_Australia';
import QUESTIONS_beyblade from './assets/questions_beyblade';
import questions_space from './assets/questions_space';
import questions_english from './assets/questions_english';
import questions_cs from './assets/questions_christianstudies';

import { Card, Typography } from '@mui/material';
import questions_math from './assets/questions_math';

export default function StandardImageList() {
  const [displayQuiz, setDisplayQuiz] = useState<boolean>(false);
  const [questions, setQuestions] = useState<
    | {
        id: string;
        text: string;
        answers: string[];
      }[]
    | null
  >(null);

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Space',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Bey Blade',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Australia',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'English',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Maths',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Christian Studies',
    },
  ];

  function onSelection(selectedTopic) {
    if (selectedTopic === 'Space') {
      setQuestions(questions_space);
    } else if (selectedTopic === 'Bey Blade') {
      setQuestions(QUESTIONS_beyblade);
    } else if (selectedTopic === 'Australia') {
      setQuestions(QUESTIONS_AUS);
    } else if (selectedTopic === 'English') {
      setQuestions(questions_english);
    } else if (selectedTopic === 'Maths') {
      setQuestions(questions_math);
    } else if (selectedTopic === 'Christian Studies') {
      setQuestions(questions_cs);
    }
    setDisplayQuiz(true);
  }

  return (
    <>
      <Typography variant='h3' component='h3'>
        Welcome to Kiddo Quiz! Please pick a topic for the quiz!
      </Typography>

      {displayQuiz && <Quiz QUESTIONS={questions}></Quiz>}
      {!displayQuiz &&
        itemData.map((item) => (
          <Card onClick={() => onSelection(item.title)}>{item.title}</Card>
        ))}
    </>
  );
}
