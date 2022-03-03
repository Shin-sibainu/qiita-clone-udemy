import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Tag from "../components/home/Tag";
import Timeline from "../components/home/Timeline";
import { db } from "../lib/firebaseConfig";
// import { auth } from "../firebaseConfig";

function Home({ user }) {
  const [postLists, setPostList] = useState([]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);

    //削除した後にデータ取得
    const getPosts = async () => {
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    console.log("a");
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
      <Tag />
      <Timeline postLists={postLists} user={user} deletePost={deletePost} />
    </div>
  );
}

export default Home;
