import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function Header({ user }) {
  const signUserOut = () => {
    signOut(auth).then(() => {
      // localStorage.clear();
      // setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div>
      <nav>
        <Link to="/" className="qiiteTitle">
          Qiite
        </Link>
        {!user ? (
          <Link to="/login">ログイン</Link>
        ) : (
          <ul>
            <li>
              <Link to="/createpost">投稿</Link>
            </li>
            <li>
              <button onClick={signUserOut} className="logoutButton">
                ログアウト
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Header;
