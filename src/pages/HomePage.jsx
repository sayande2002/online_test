import {Link, useNavigate} from 'react-router-dom';
import Button from 'components/button';
import NewTooltip from 'lib/tooltip';

const rules = [
  'Do not Exit the Full Screen Mode in Test Page , Exam will be cancelled',
  'Right Click is not allowed ! Exam will be cancelled',
  'No cell phones or other secondary devices in the room or test area',
  'Your desk/table must be clear or any materials except your test-taking device',
  'No one else can be in the room with you',
  'No talking',
  'The testing room must be well-lit and you must be clearly visible',
  'No dual screens/monitors',
  'Do not leave the camera',
  'No use of additional applications or internet',
];

const Home = () => {
  const navigate = useNavigate();
  const testHandler = () => {
    navigate('/test');
  };
  return (
    <>
      {localStorage.getItem('testToken') ? (
        <div className='flex flex-col items-center justify-center gap-5 mt-2'>
          <ul className='font-semibold rounded-lg bg-slate-300 p-2'>
            <p className='text-center text-2xl'>Rules :-</p>
            {rules.map((r, i) => (
              <span
                key={i}
                className='flex items-center justify-start p-2 gap-2'>
                <span className='flex items-center justify-center h-7 w-7 text-lg bg-green-500 rounded-md  cursor-pointer text-white font-medium'>
                  &#10003;
                </span>
                <li key={i}>{r}</li>
              </span>
            ))}
          </ul>
          <div className='flex items-center'>
            <NewTooltip title='Start Test'>
              <Button onClick={testHandler} buttonType='inverted'>
                Start Test
              </Button>
            </NewTooltip>
          </div>
        </div>
      ) : (
        <div className='flex gap-5 mt-10 items-center justify-center'>
          <Link to='/login'>
            <NewTooltip title='Log In'>
              <Button buttonType='inverted'>Log In</Button>
            </NewTooltip>
          </Link>
          <Link to='/signup'>
            <NewTooltip title='Sign Up'>
              <Button buttonType='inverted'>Sign Up</Button>
            </NewTooltip>
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
