import { useRef, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '../../const';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const [error, setError] = useState({error: false, message: ''});
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if(EMAIL_REGEXP.test(loginRef.current.value)) {
        setError({error: false, message:''});
        if(PASSWORD_REGEXP.test(passwordRef.current.value)) {
          setError({error: false, message:''});
          onSubmit({
            login: loginRef.current.value,
            password: passwordRef.current.value,
          });
        } else {
          setError({error: true, message:'Please enter a valid password'});
        }
      } else {
        setError({error: true, message:'Please enter a valid email address'});
      }

    }
  };
  return (
    <div className="user-page">
      <Helmet>
        <title>What to watch. Sign In</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {error.error && <div className="sign-in__message"><p>{error.message}</p></div>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={error.error ? 'sign-in__field sign-in__field--error' : 'sign-in__field'}>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
