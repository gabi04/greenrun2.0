/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, FormEvent } from "react";
import { LoginStyles } from "./LoginStyles";
import { auth } from "../../firebase";
import { GreenRunContext } from "../../contexts/GreenRunContext";

const Login = ({ setSignup }: any): JSX.Element => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const greenRunContext = useContext(GreenRunContext) as any;
  const { setLogged } = greenRunContext;

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        setLogged(true);
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

          <a className="login__form__link" onClick={() => setSignup(true)}>
            Do not you have an account yet?
          </a>

          <input className="login__form__submit" type="submit" value="Log in" />
        </form>
      </div>
    </LoginStyles>
  );
};

export default Login;
