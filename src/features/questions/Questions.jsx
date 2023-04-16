import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'components/button';
import Options from 'features/options/Options';
import {DataContext} from 'context/dataContext';
import {MyTimer} from 'lib/timer';

const Questions = () => {
  const navigate = useNavigate();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 10 minutes timer = 600
  const {question, qno, setQno, pageNumber, setRadio} = useContext(DataContext);
  window.addEventListener('blur', () => {
    document.title = 'You are Not Allowed';
  });
  window.addEventListener('focus', () => {
    document.title = 'Test';
  });

  const nexthandler = () => {
    setQno(qno + 1);
    setRadio('');
    if (qno === pageNumber) {
      navigate('/result');
    }
  };

  const previoushandler = () => setQno(qno - 1);
  return (
    <div className='flex flex-col w-full md:w-3/4 m-6 gap-4'>
      <div className='flex items-center justify-center gap-4'>
        <p className='text-2xl font-bold'>Time Left :- </p>
        <MyTimer expiryTimestamp={time} />
      </div>

      {question?.map(({_id, QuestionNumber, question}) => (
        <div key={_id} className='flex gap-5'>
          <p className='flex items-center justify-center h-10 w-10 bg-red-500 rounded-md  cursor-pointer text-white font-semibold'>
            {QuestionNumber}
          </p>
          <p className='font-semibold text-xl break-words'>{question}</p>
        </div>
      ))}

      <Options question={question} />

      <div className='flex gap-4 items-center justify-center'>
        <Button
          buttonType='blue'
          disabled={qno === 1 ? true : false}
          className={`w-44 ${
            qno === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={previoushandler}>
          Previous
        </Button>
        <Button buttonType='blue' className='w-44' onClick={nexthandler}>
          {qno === pageNumber ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default Questions;
