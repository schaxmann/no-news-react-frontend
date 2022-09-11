import "../styling/ArticlePage.css";
import { useState } from "react";
import axios from "axios";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
// import IconButton from "@mui/joy/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/joy/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartBold } from "@fortawesome/free-solid-svg-icons";
function Votes(props) {
  let { votes, article } = props;
  const [newVotes, setNewVotes] = useState(votes);
  const [err, setErr] = useState(null);
  const [heartIcon, setHeartIcon] = useState(faHeart);
  const [voteButton, setvoteButton] = useState("voteButton");
  const [disabled, setDisabled] = useState(false);

  const voteHandler = () => {
    setNewVotes(newVotes + 1);
    setDisabled(true);
    setHeartIcon(faHeartBold);
    setvoteButton("voteButtonClicked");
    setErr(null);
    axios
      .patch(`https://schaxmann-news.herokuapp.com/api/articles/${article}`, {
        inc_votes: 1,
      })
      .then(() => {
        setDisabled(true);
      })
      .catch(() => {
        setNewVotes(newVotes);
        setHeartIcon(faHeart);
        setErr("Something went wrong, please try again later.");
        setvoteButton("voteButton");
        setDisabled(false);
      });
  };

  const font = "ibm-plex-mono, sans-serif";

  return (
    <section className="votes">
      {/* <h3>Curent Votes: {newVotes}</h3> */}
      <button
        className={voteButton}
        disabled={disabled}
        onClick={() => {
          voteHandler();
        }}
      >
        <FontAwesomeIcon className="voteHeart" icon={heartIcon} />{" "}
        {article.votes}
        {newVotes}
      </button>
      {/* <button
        disabled={disabled}
        onClick={() => {
          voteHandler();
        }}
      >
        Upvote
      </button> */}
      {err ? <p>{err}</p> : <p></p>}
    </section>
  );
}

export default Votes;
