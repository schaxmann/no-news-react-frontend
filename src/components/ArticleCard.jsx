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

  const space = "a ";

  return (
    <li className="articleCard">
      <Link className="articleLink" to={`/articles/${article.article_id}`}>
        {/* <h3>{article.title}</h3>
      <h4>Published: {article.created_at.split("T")[0]}</h4>
      <h4>Author: {article.author}</h4>
      <p className="articleInfo">Topic: {article.topic}</p>
      <p className="articleInfo">Votes: {article.votes}</p>
      <p className="articleInfo">Comments: {article.comment_count}</p>
      <Link className="articleLink" to={`/articles/${article.article_id}`}>
        Read Now
      </Link> */}
        {console.log(article.title.length)}

        <Card
          variant="outlined"
          // sx={{
          //   width: "90%",
          // }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src={require(`../assets/${article.topic}.png`)}
                alt={`${article.topic} icon`}
              />
            </AspectRatio>
          </CardOverflow>
          <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
            {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
            {article.title}
            {/* </Link> */}
          </Typography>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            Written by: {article.author}
          </Typography>
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              borderTop: "1px solid",
              borderColor: "neutral.outlinedBorder",
              bgcolor: "background.level1",
              // mt: "auto",
            }}
          >
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              Votes: {article.votes}
            </Typography>
            <Box sx={{ width: 2, bgcolor: "divider" }} />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              Comments: {article.comment_count}
            </Typography>
            <Box sx={{ width: 2, bgcolor: "divider" }} />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {formatDate(new Date(article.created_at.split("T")[0]))}
            </Typography>
          </CardOverflow>
        </Card>
      </Link>
    </li>
  );
}

export default ArticleCard;
