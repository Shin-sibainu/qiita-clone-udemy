import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../lib/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      // localStorage.setItem("isAuth", true);
      //ログインしたことを確認
      // setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p>続けるにはグーグルでログインしてください</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        グーグルでログイン
      </button>
    </div>
  );
}

export default Login;
