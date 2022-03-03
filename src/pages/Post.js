import React from "react";
// import { auth } from "../firebaseConfig";

//post情報をどうやって持ってくるか。
//➡useContextを使って持ってくるか。
function Post({ post }) {
  return (
    <div key={post.id} className="singlePost">
      <div className="postHeader">
        <img src={post.author.photoURL} />
        <span>@{post.author.name}が投稿しました</span>
      </div>

      <div className="title">
        <h1>{post.title}</h1>
      </div>
    </div>
  );
}

export default Post;
