import Button from 'components/button';
import NewTooltip from 'lib/tooltip';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-center justify-center gap-5 mt-40'>
      {localStorage.getItem('testToken') ? (
        <Link to='/test'>
          <Button buttonType='inverted'>Take Test</Button>
        </Link>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Home;
