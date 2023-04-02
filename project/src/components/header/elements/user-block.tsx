import { useAppDispatch } from '../../../hooks';
import { logoutAction } from '../../../store/api-actions';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logoutAction());
  };
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item" onClick={handleClick}>
        <div className="user-block__link">Sign out</div>
      </li>
    </ul>
  );
}
export default UserBlock;
