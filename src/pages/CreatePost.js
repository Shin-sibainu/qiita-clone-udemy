import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPostText, setInputPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = () => {
    addDoc(postsCollectionRef, {
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
      title: inputTitle,
      postText: inputPostText,
    });
    navigate("/");
  };

  useEffect(() => {
    //投稿ページに行っても、ログインしてなければログインページにリダイレクトさせる。
    if (!isAuth) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>投稿</h1>
        <div className="inputGp">
          <label> タイトル：</label>
          <input
            placeholder="例：Firebaseログイン認証について"
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
          />
        </div>
        <div className="inputGp">
          <label> 投稿内容:</label>
          <textarea
            placeholder="内容"
            onChange={(e) => setInputPostText(e.target.value)}
            value={inputPostText}
          />
        </div>
        <button onClick={createPost}>投稿する</button>
      </div>
    </div>
  );
}

export default CreatePost;
