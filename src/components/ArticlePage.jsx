import { useParams } from "react-router-dom";
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

function ArticlePage() {
  const { article } = useParams();
  const { currentArticle, isLoading } = useFetchArticle(article);

  if (isLoading) return <CircularProgress />;
  return (
    <main>
      <article className="mainArticles">
        <Card variant="outlined" sx={{ width: "100%" }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src={require(`../assets/${currentArticle.topic}.png`)}
                alt={`${currentArticle.topic} icon`}
              />
            </AspectRatio>
          </CardOverflow>
          <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
            {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
            {currentArticle.title}
            {/* </Link> */}
          </Typography>
          <Typography level="body 1" sx={{ fontSize: "md", mt: 2 }}>
            {/* <Link className="articleLink" to={`/articles/${article.article_id}`}> */}
            {currentArticle.body}
            {/* </Link> */}
          </Typography>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            Written by: {currentArticle.author}
          </Typography>
        </Card>
      </article>
      <section className="votes">
        <Votes votes={currentArticle.votes} article={article} />
      </section>
      <Comments />
    </main>
  );
}

export default ArticlePage;
