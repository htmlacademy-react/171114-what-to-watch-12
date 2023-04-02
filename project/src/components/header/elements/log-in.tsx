import { Link } from 'react-router-dom';

function LogIn(): JSX.Element {
  return (
    <div className="user-block">
      <Link to="/login" className="user-block__link">Sign in</Link>
    </div>
  );
}
export default LogIn;
