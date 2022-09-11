import "../styling/ArticlePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

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
        setRowNum(1);
      })
      .catch(() => {
        setErr("Something went wrong, please try again later.");
        setDisabled(false);
      });
  };

  return (
    <fieldset className="postComment">
      {/* <h3 className="comment">Leave a Comment: </h3> */}
      <form>
        <textarea
          rows={rowNum}
          cols="49"
          onChange={(event) => {
            if (event.target.value.length < 51) {
              setRowNum(1);
            }
            if (
              (event.target.value.length > 50 && rowNum === 1) ||
              (event.target.value.length < 101 && rowNum === 3)
            ) {
              setRowNum(2);
            }
            if (
              (event.target.value.length > 100 && rowNum === 2) ||
              (event.target.value.length < 151 && rowNum === 4)
            ) {
              setRowNum(3);
            }
            if (event.target.value.length > 150 && rowNum === 3) {
              setRowNum(4);
            }
            setNewComment(event.target.value);
          }}
          placeholder="Enter your comment..."
          value={newComment}
          maxLength="200"
        />
      </form>
      <button
        className="post"
        disabled={disabled}
        onClick={() => {
          postHandler();
        }}
      >
        Post Comment{" "}
        <span className="lengthCounter">
          <FontAwesomeIcon className="fa-pen" icon={faPenToSquare} />
          {newComment.length}/200
        </span>
      </button>
      {err && <p>{err}</p>}
    </fieldset>
  );
}

export default CommentPost;
