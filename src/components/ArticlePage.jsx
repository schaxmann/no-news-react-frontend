import { useParams } from "react-router-dom";
import "../styling/ArticlePage.css";
import { useFetchArticle } from "../hooks/useFetch";
import Votes from "./Votes";
import Comments from "./Comments";
import { CircularProgress } from "@mui/material";

function ArticlePage() {
  const { article } = useParams();
  const { currentArticle, isLoading } = useFetchArticle(article);

  if (isLoading) return <CircularProgress />;
  return (
    <main>
      <article className="mainArticles">
        <h2> {currentArticle.title}</h2>
        <p>{currentArticle.body}</p>
        <h3> Written by: {currentArticle.author} </h3>
        <h3> Published on: {currentArticle.created_at.split("T")[0]} </h3>
      </article>
      <section className="votes">
        <Votes votes={currentArticle.votes} article={article} />
      </section>
      <Comments />
    </main>
  );
}

export default ArticlePage;
