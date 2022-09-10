import "../styling/ArticleCard.css";
import { Link } from "react-router-dom";
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

function ArticleCard(props) {
  const { article } = props;

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
    <Link className="cardLink" to={`/articles/${article.article_id}`}>
      <li className="articleCard">
        <h3>
          <span>{article.title.toUpperCase()}</span>
        </h3>
        <div className="info">
          <h4>
            <FontAwesomeIcon className="fa" icon={faCalendar} />
            {formatDate(new Date(article.created_at.split("T")[0]))}
          </h4>
          <h4>
            <FontAwesomeIcon className="fa" icon={faPenToSquare} />
            {article.author}
          </h4>
        </div>
        <div className="stats">
          <p className="articleInfo">
            {article.topic === "cooking" && (
              <FontAwesomeIcon className="fa" icon={faUtensils} />
            )}
            {article.topic === "football" && (
              <FontAwesomeIcon className="fa" icon={faSoccerBall} />
            )}
            {article.topic === "coding" && (
              <FontAwesomeIcon className="fa" icon={faCode} />
            )}
          </p>
          <p>|</p>

          <p className="articleInfo">
            <FontAwesomeIcon className="heart" icon={faHeart} /> {article.votes}
          </p>
          <p>|</p>
          <p className="articleInfo">
            <FontAwesomeIcon className="fa" icon={faMessage} />{" "}
            {article.comment_count}
          </p>
          <p>|</p>
          <Link className="articleLink" to={`/articles/${article.article_id}`}>
            <FontAwesomeIcon className="fa-teal" icon={faArrowRightLong} />
          </Link>
        </div>
      </li>
    </Link>
  );
}

export default ArticleCard;
