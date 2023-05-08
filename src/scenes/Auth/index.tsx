/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, FormEvent } from "react";
import { LoginStyles } from "./LoginStyles";
import { auth } from "../../firebase";

const Login = (): JSX.Element => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <input
              className="login__from__input"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label className="login__user__label">
            <span className="login__form__span">Password:</span>
            <input
              className="login__from__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <a className="login__form__link">Forgot your password?</a>
          <a className="login__form__link">Do not you have an account yet?</a>

          <input className="login__form__submit" type="submit" value="Login" />
        </form>
      </div>
    </LoginStyles>
  );
};

export default Login;
