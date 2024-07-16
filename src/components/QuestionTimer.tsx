import { useEffect, useState } from 'react';

interface Props {
  timeout: number;
  onTimeOutComplete: any;
}

const QuestionTimer = (props: Props) => {
  const [remainingTime, setRemainingtime] = useState(props.timeout);

  useEffect(() => {
    const timer = setTimeout(props.onTimeOutComplete, props.timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [props.timeout, props.onTimeOutComplete]);

  useEffect(() => {
    const createdInterval = setInterval(() => {
      setRemainingtime((prevState) => prevState - 100);
    }, 100);
    return () => {
      clearInterval(createdInterval);
    };
  }, [props.timeout]);

  return (
    <progress
      id='progress'
      max={props.timeout}
      value={remainingTime}
    ></progress>
  );
};

export default QuestionTimer;
