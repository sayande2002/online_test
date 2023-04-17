import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Analytics from 'features/analytics/Analytics';
import Number from 'features/number/Number';
import Questions from 'features/questions/Questions';
import {toastify} from 'lib/toast';

const TestPage = () => {
  const navigate = useNavigate();
  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      toastify(
        'Exam Cancelled ! Because You have exited full screen mode.',
        'error'
      );
      navigate('/result');
    }
  };
  useEffect(() => {
    document.documentElement.requestFullscreen();
    toastify('Best of Luck!', 'success');
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
    toastify('Exam Cancelled because you right clicked !', 'error'); // prevent the default right-click menu from showing up
    navigate('/result');
  };
  return (
    <div className='h-screen w-screen' onContextMenu={handleContextMenu}>
      <Analytics />
      <div className='flex flex-col md:flex-row'>
        <Questions />
        <Number />
      </div>
    </div>
  );
};

export default TestPage;
