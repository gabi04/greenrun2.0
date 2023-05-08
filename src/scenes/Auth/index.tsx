/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (): JSX.Element => {
  const [signup, setSignup] = useState<boolean>(false);

  return signup ? (
    <Signup setSignup={setSignup} />
  ) : (
    <Login setSignup={setSignup} />
  );
};

export default Auth;
