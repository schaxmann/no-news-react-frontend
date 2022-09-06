import "../styling/ArticlePage.css";
import { useState } from "react";
import axios from "axios";

function CommentPost(props) {
  let { article, setHasCommented, hasCommented } = props;
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const postHandler = () => {
    setDisabled(true);
    setErr(null);
    axios
      .post(
        `https://schaxmann-news.herokuapp.com/api/articles/${article}/comments`,
        {
          username: "grumpy19",
          body: newComment,
        }
      )
      .then(() => {
        setDisabled(false);
        setHasCommented(hasCommented + 1);
        setNewComment("");
      })
      .catch(() => {
        setErr("Something went wrong, please try again later.");
        setDisabled(false);
      });
  };

  return (
    <fieldset className="postComment">
      <h3 className="comment">Leave a Comment: </h3>
      <h4 className="comment">Logged In As: grumpy19</h4>
      <form>
        <textarea
          rows="2"
          cols="50"
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          placeholder="Enter your comment..."
          value={newComment}
        />
      </form>
      <button
        disabled={disabled}
        onClick={() => {
          postHandler();
        }}
      >
        Post Comment
      </button>
      {err ? <p>{err}</p> : <p></p>}
    </fieldset>
  );
}

export default CommentPost;
