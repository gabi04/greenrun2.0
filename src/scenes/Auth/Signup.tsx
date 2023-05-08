/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, FormEvent } from "react";
import { LoginStyles } from "./LoginStyles";
import { auth } from "../../firebase";

const Signup = ({ setSignup }: any): JSX.Element => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user, password)
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
        <p className="login__text">Create an account.</p>
        <form onSubmit={handleSignUp}>
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

          <a className="login__form__link" onClick={() => setSignup(false)}>
            Log in
          </a>

          <input
            className="login__form__submit"
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    </LoginStyles>
  );
};

export default Signup;
