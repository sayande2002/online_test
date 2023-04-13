import Button from "components/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <dev>
      <Link to="/test">
        <Button buttonType="inverted">Take Test</Button>
      </Link>
    </dev>
  );
};

export default Home;
