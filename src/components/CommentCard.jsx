import axios from "axios";
import { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

function CommentCard(props) {
  let { comment, hasCommented, setHasCommented } = props;
  const [toDelete, setToDelete] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [err, setErr] = useState(null);

  const stateHandler = (event) => {
    setToDelete(event.target.parentNode.getAttribute("postid"));
  };

  useEffect(() => {
    const deleteHandler = () => {
      setDisabled(true);
      setErr(null);
      axios
        .delete(`https://schaxmann-news.herokuapp.com/api/comments/${toDelete}`)
        .then(() => {
          setToDelete(null);
          setDisabled(false);
          setHasCommented(hasCommented + 1);
        })
        .catch(() => {
          setErr("Something went wrong, please try again later.");
          setDisabled(false);
        });
    };
    if (toDelete) {
      deleteHandler();
    }
  }, [toDelete, hasCommented, setHasCommented]);

  return (
    <li className="commentCard" postid={comment.comment_id}>
      {comment.author === "grumpy19" ? (
        <>
          <Card variant="outlined" sx={{ maxWidth: "100%" }}>
            <Typography level="body 1" sx={{ fontSize: "md", mt: 0 }}>
              {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
              {comment.body}
              {/* </Link> */}
            </Typography>
            <button
              disabled={disabled}
              onClick={(event) => {
                stateHandler(event);
              }}
            >
              Delete
            </button>
          </Card>
        </>
      ) : (
        <>
          <Card variant="outlined" sx={{ maxWidth: "100%" }}>
            <Typography level="body 1" sx={{ fontSize: "md", mt: 0 }}>
              {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
              {comment.body}
              {/* </Link> */}
            </Typography>
          </Card>
          {/* <p>{comment.body}</p>
          <h5>Published: {comment.created_at.split("T")[0]}</h5>
          <h5>Author: {comment.author}</h5> */}
        </>
      )}
      {err ? <p>{err}</p> : null}
    </li>
  );
}

export default CommentCard;
