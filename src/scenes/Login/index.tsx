/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { LoginStyles } from "./LoginStyles";

const Login = (): JSX.Element => {
  const handleLogin = () => {
    console.log("handleLogin");
  };
  return (
    <LoginStyles>
      <div>
        <h1 className="login__title">Welcome</h1>
        <p className="login__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleLogin}>
          <label className="login__user__label">
            <span className="login__form__span">User:</span>
            <input className="login__from__input" type="text" />
          </label>
          <label className="login__user__label">
            <span className="login__form__span">Password:</span>
            <input className="login__from__input" type="password" />
          </label>

          <a className="login__form__link">Forgot your password?</a>
          <input className="login__form__submit" type="submit" value="Login" />
        </form>
      </div>
    </LoginStyles>
  );
};

export default Login;
