import { useParams, useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "../styling/ArticleList.css";
import { useFetchArticles } from "../hooks/useFetch";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

function ArticleList() {
  const { topic } = useParams();
  const [sorter, setSorter] = useState({
    sort_by: "created_on",
    order: "desc",
  });
  const [submitSorter, setSubmitSorter] = useState({});
  const { articleList, isLoading } = useFetchArticles(topic, submitSorter);
  const [setSearchParams] = useSearchParams();
  const [isChecked, setIsChecked] = useState("desc");
  const [selector, setSelector] = useState("created_at");

  const cream = "#f4f1d0";

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
      setSelector(event.target.value);
      setSorter(newSorter);
    } else {
      const newSorter = { ...sorter };
      newSorter.order = event.target.value;
      setIsChecked(event.target.value);
      setSorter(newSorter);
    }
  };

  if (isLoading) return <CircularProgress sx={{ color: cream }} />;
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
          value={selector}
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
          checked={"asc" === isChecked}
        />
        <label htmlFor="asc">Ascending</label>
        <input
          type="radio"
          id="desc"
          name="order"
          onChange={(event) => {
            handleChange(event);
          }}
          value="desc"
          checked={"desc" === isChecked}
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
