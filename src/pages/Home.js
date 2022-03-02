import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";

function Home({ user }) {
  const [postLists, setPostList] = useState([]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    //firestoreからデータを持ってくる。
    const getPosts = async () => {
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //ここでpostListsが変わるから、第二引数に割り当てると無限ループになる。
    };
    getPosts();
    console.log("a");
  }, []);

  return (
    <div className="homePage">
      {postLists.map((post) => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {user && post.author.id === auth.currentUser.uid && (
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  削除
                </button>
              )}
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <h3>@ {post.author.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
