import "../styling/ArticleCard.css";
import { Link } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

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
    <li className="articleCard">
      <h3>
        <span>{article.title.toUpperCase()}</span>
      </h3>
      <h4>
        Published: {formatDate(new Date(article.created_at.split("T")[0]))}
      </h4>
      <h4>Author: {article.author}</h4>
      <p className="articleInfo">Topic: {article.topic}</p>
      <p className="articleInfo">Votes: {article.votes}</p>
      <p className="articleInfo">Comments: {article.comment_count}</p>
      <Link className="articleLink" to={`/articles/${article.article_id}`}>
        Read Now
      </Link>
    </li>
  );
}

export default ArticleCard;
