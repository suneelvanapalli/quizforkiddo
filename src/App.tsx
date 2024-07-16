import React, { useState } from 'react';
import Quiz from './components/Quiz';
import QUESTIONS_ALL from './assets/questions';
import { Card, List, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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

  function onSelection(selectedTopic) {
    setQuestions(QUESTIONS_ALL.find((q) => q.id === selectedTopic)!.questions);
    setDisplayQuiz(true);
  }

  return (
    <>
      {!displayQuiz && (
        <>
          <Typography variant='h3' component='h3'>
            Welcome to Kiddo Quiz! Please pick a topic for the quiz!
          </Typography>
          <Divider></Divider>
          <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <nav aria-label='main mailbox folders'>
              <List>
                {QUESTIONS_ALL.map((item) => (
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => onSelection(item.id)}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Box>{' '}
        </>
      )}
      {displayQuiz && <Quiz QUESTIONS={questions}></Quiz>}
    </>
  );
}
