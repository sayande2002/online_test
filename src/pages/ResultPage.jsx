import Button from 'components/button';
import {DataContext} from 'context/dataContext';
import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const ResultPage = () => {
  const {answers, setQno} = useContext(DataContext);
  useEffect(() => {
    if (document.fullscreen) {
      document.exitFullscreen();
    }
  }, []);
  const navigate = useNavigate();
  const rightAnswer = [0, 2, 4, 1, 3];
  var score = 0;
  const homeHandler = () => {
    navigate('/');
    setQno(1);
    window.location.reload();
  };
  for (let i = 1; i <= rightAnswer.length; i++) {
    if (rightAnswer[i] === answers[i]) {
      score = score + 1;
    }
  }
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <p className='text-4xl font-bold'>Result Page</p>
      <p className='text-xl font-bold'>Your marks is {score - 1} out of 4</p>
      <Button onClick={homeHandler} buttonType='inverted'>
        Go Home
      </Button>
    </div>
  );
};

export default ResultPage;
