import "../styling/ArticleList.css";

import axios from "axios";
import { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faTrashCan,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

function CommentCard(props) {
  let { comment, hasCommented, setHasCommented } = props;
  const [toDelete, setToDelete] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [err, setErr] = useState(null);

  const stateHandler = (event) => {
    setToDelete(
      event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
        "postid"
      )
    );
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

  function formatDate(date) {
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + " " + day + " " + year;
  }

  return (
    <li className="commentCard" postid={comment.comment_id}>
      {comment.author === "grumpy19" ? (
        <>
          <div className="commentBox">
            <div className="commentPadding">
              <p className="commentBody">
                {" "}
                {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
                {comment.body}
                {/* </Link> */}
              </p>
              <div className="commentInfo">
                <p>
                  <FontAwesomeIcon className="fa" icon={faUser} />
                  {comment.author} <span className="bold">(You)</span>
                </p>
                <button
                  className="deleteComment"
                  disabled={disabled}
                  onClick={(event) => {
                    console.log("click");
                    stateHandler(event);
                  }}
                >
                  <FontAwesomeIcon className="fa" icon={faTrashCan} /> Delete
                </button>
                <p>
                  <FontAwesomeIcon className="fa" icon={faCalendar} />
                  {formatDate(new Date(comment.created_at.split("T")[0]))}{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="commentBox">
            <div className="commentPadding">
              <p className="commentBody">
                {" "}
                {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
                {comment.body}
                {/* </Link> */}
              </p>
              <div className="commentInfo">
                <p>
                  <FontAwesomeIcon className="fa" icon={faUser} />
                  {comment.author}
                </p>
                <p>
                  <FontAwesomeIcon className="fa" icon={faCalendar} />
                  {formatDate(new Date(comment.created_at.split("T")[0]))}{" "}
                </p>
              </div>
            </div>
          </div>
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
