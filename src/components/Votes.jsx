import "../styling/ArticlePage.css";
import { useState } from "react";
import axios from "axios";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
// import IconButton from "@mui/joy/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/joy/Button";

function Votes(props) {
  let { votes, article } = props;
  const [newVotes, setNewVotes] = useState(votes);
  const [err, setErr] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const voteHandler = () => {
    setNewVotes(newVotes + 1);
    setDisabled(true);
    setErr(null);
    axios
      .patch(`https://schaxmann-news.herokuapp.com/api/articles/${article}`, {
        inc_votes: 1,
      })
      .then(() => {
        setDisabled(false);
      })
      .catch(() => {
        setNewVotes(newVotes);
        setErr("Something went wrong, please try again later.");
        setDisabled(false);
      });
  };

  const font = "ibm-plex-mono, sans-serif";

  return (
    <section className="votes">
      {/* <h3>Curent Votes: {newVotes}</h3> */}
      <Button
        variant="solid"
        color="danger"
        size="lg"
        disabled={disabled}
        startIcon={<FavoriteBorder />}
        onClick={() => {
          voteHandler();
        }}
        sx={{ mt: 5, fontFamily: font }}
      >
        {newVotes}
      </Button>
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
