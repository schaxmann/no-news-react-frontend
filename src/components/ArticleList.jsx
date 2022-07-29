import { useParams, useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "../styling/ArticleList.css";
import { useFetchArticles } from "../hooks/useFetch";
import { useState } from "react";

function ArticleList() {
  const { topic } = useParams();
  const [sorter, setSorter] = useState({
    sort_by: "created_on",
    order: "desc",
  });
  const [submitSorter, setSubmitSorter] = useState({});
  const { articleList, isLoading } = useFetchArticles(topic, submitSorter);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortHandler = (event) => {
    event.preventDefault();
    setSearchParams(sorter);
    setSubmitSorter(sorter);
  };

  const handleChange = (event) => {
    console.log(sorter);
    if (event.target.id === "sortBy") {
      const newSorter = { ...sorter };
      newSorter.sort_by = event.target.value;
      setSorter(newSorter);
    } else {
      const newSorter = { ...sorter };
      newSorter.order = event.target.value;
      setSorter(newSorter);
    }
  };

  if (isLoading) return <progress></progress>;
  return (
    <main>
      {topic ? (
        <h2 id="listTitle">
          Check Out These {topic.charAt(0).toUpperCase() + topic.slice(1)}{" "}
          Articles ⬇️{" "}
        </h2>
      ) : (
        <h2 id="listTitle">Check Out These Articles ⬇️</h2>
      )}
      <form className="sort">
        <label htmlFor="sortBy">Sort By: </label>
        <select
          id="sortBy"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value="created_on">Date Published</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Vote Count</option>
        </select>
        <input
          type="radio"
          id="asc"
          name="order"
          onChange={(event) => {
            handleChange(event);
          }}
          value="asc"
        />
        <label htmlFor="asc">Ascending</label>
        <input
          type="radio"
          id="desc"
          name="order"
          defaultChecked
          onChange={(event) => {
            handleChange(event);
          }}
          value="desc"
        />
        <label htmlFor="desc">Descending</label>
        <button
          onClick={(event) => {
            sortHandler(event);
          }}
        >
          Sort
        </button>
      </form>
      <section>
        <ul id="articleList">
          {articleList.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    </main>
  );
}

// TODO: Pagination

export default ArticleList;
