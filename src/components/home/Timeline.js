import React from "react";
import { auth } from "../../lib/firebaseConfig";
import { Link } from "react-router-dom";

function Timeline({ postLists, user, deletePost }) {
  return (
    <section className="post">
      {postLists.map((post) => (
        <Link to={`/post/${post.author.name}/${post.id}`}>
          <div key={post.id} className="singlePost">
            <div className="postHeader">
              <img src={post.author.photoURL} />
              <span>@{post.author.name}が投稿しました</span>
            </div>

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
        </Link>
      ))}
    </section>
  );
}

export default Timeline;
