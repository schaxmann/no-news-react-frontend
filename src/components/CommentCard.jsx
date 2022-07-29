function CommentCard(props) {
  const { comment } = props;
  return (
    <li className="commentCard">
      <p>{comment.body}</p>
      <h5>Published: {comment.created_at.split("T")[0]}</h5>
      <h5>Author: {comment.author}</h5>
    </li>
  );
}

export default CommentCard;
