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

  return (
    <div>
      <Analytics />
      <div className='flex flex-col md:flex-row'>
        <Questions />
        <Number />
      </div>
    </div>
  );
};

export default TestPage;

// useEffect(() => {
//   const handleScreenSharing = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia();
// If the Promise resolves, the user is attempting to share their screen
// You can prevent screen mirroring by displaying a message or disabling the feature
//       console.log("Screen sharing detected");
//     } catch (error) {
//       console.error("Error detecting screen sharing:", error);
//     }
//   };
//   handleScreenSharing();
// }, []);
