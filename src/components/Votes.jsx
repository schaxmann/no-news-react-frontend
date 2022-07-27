import { useParams } from "react-router-dom";
import "../styling/ArticlePage.css";
import { useFetchArticle } from "../hooks/useFetch";
import * as React from "react";

function Votes() {
  const { article } = useParams();
  const { currentArticle, isLoading } = { props };

  if (isLoading) return <progress></progress>;
  return (
    <main>
      <article>
        <h2> {currentArticle.title}</h2>
        <p>{currentArticle.body}</p>
        <h3> Curent Votes: {currentArticle.author} </h3>
        <h3> Published on: {currentArticle.created_at.split("T")[0]} </h3>
      </article>
      <section className="votes">
        <Votes votes={currentArticle.votes} />
      </section>
    </main>
  );
}

export default Votes;
