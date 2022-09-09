import "../styling/ArticlePage.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CommentPost(props) {
  let { article, setHasCommented, hasCommented } = props;
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [rowNum, setRowNum] = useState(1);

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
          rows={rowNum}
          cols="50"
          onChange={(event) => {
            setNewComment(event.target.value);
            if (event.target.value.length < 1) {
              setRowNum(1);
            }
            if (event.target.value.length > 48 && rowNum === 1) {
              setRowNum(rowNum + 1);
            }
            if (event.target.value.length > 98 && rowNum === 2) {
              setRowNum(rowNum + 1);
            }
            if (event.target.value.length > 148 && rowNum === 3) {
              setRowNum(rowNum + 1);
            }
          }}
          placeholder="Enter your comment..."
          value={newComment}
          maxLength="180"
        />
      </form>
      <button
        className="post"
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
