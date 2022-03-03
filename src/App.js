import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
// import { useState } from "react";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/headers/Header";

function App() {
  //認証しているのかどうかの判定(useContextで実装しても良い)
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/createpost" element={<CreatePost user={user} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
