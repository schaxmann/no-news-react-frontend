import { useParams } from "react-router-dom";
import "../styling/ArticlePage.css";
import { useFetchArticle } from "../hooks/useFetch";

function ArticlePage() {
  const { article } = useParams();
  const { currentArticle, isLoading } = useFetchArticle(article);

  if (isLoading) return <progress></progress>;
  return (
    <main>
      <article>
        <h2> {currentArticle.title}</h2>
        <p>{currentArticle.body}</p>
        <h3> Written by: {currentArticle.author} </h3>
        <h3> Published on: {currentArticle.created_at.split("T")[0]} </h3>
      </article>
      <section></section>
    </main>
  );
}

export default ArticlePage;
