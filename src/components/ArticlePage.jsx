import { useParams, Link } from "react-router-dom";
import "../styling/ArticlePage.css";
import { useFetchArticle } from "../hooks/useFetch";
import Votes from "./Votes";
import Comments from "./Comments";
import { CircularProgress } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faContactCard,
  faHeart,
  faSoccerBall,
  faMessage,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBowlFood,
  faCode,
  faUtensils,
  faUtensilSpoon,
  faCaretRight,
  faAnglesRight,
  faRightLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

function ArticlePage() {
  const { article } = useParams();
  const { currentArticle, isLoading } = useFetchArticle(article);
  const teal = "teal";

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

  if (isLoading) return <CircularProgress sx={{ color: teal }} />;
  return (
    <main>
      <article className="mainArticles">
        <h2>{currentArticle.title}</h2>
        <h4>
          <FontAwesomeIcon className="fa" icon={faCalendar} />{" "}
          {formatDate(new Date(currentArticle.created_at.split("T")[0]))}
        </h4>
        <h4>
          <FontAwesomeIcon className="fa" icon={faPenToSquare} />{" "}
          {currentArticle.author}
        </h4>
        <p>{currentArticle.body}</p>
        <h4>
          Filed Under:{" "}
          <Link className="topicLink" to={`/${currentArticle.topic}`}>
            {currentArticle.topic[0].toUpperCase() +
              currentArticle.topic.slice(1)}
          </Link>
        </h4>
      </article>
      <section className="votes">
        <Votes votes={currentArticle.votes} article={article} />
      </section>
      <Comments />
    </main>
  );
}

export default ArticlePage;
