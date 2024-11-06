function PostLikes({ postElement }) {
  return (
    <>
      <div>{postElement.likes}</div>
      <div>{postElement.dislikes}</div>
    </>
  );
}

export default PostLikes;
