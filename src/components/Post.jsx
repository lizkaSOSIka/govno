import "./Post.css";
import React from "react";

// Компонент Post принимает в себя пропс - postElement - это объект, у которого есть
// поля title (строка), text (строка), date (строка), time (строка), likes (число), dislikes (число)
function Post({ postElement, deletePost }) {
  return (
    <div className={"post_container"}>
      <h2> {postElement.title}</h2>
      <div> {postElement.body} </div>
      <button onClick={() => deletePost(postElement.id)}>удалить шнягу</button>
    </div>
  );
}

export default Post;
