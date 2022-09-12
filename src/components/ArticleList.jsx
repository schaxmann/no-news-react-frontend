import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "../styling/ArticleList.css";
import { useFetchArticles } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

function ArticleList() {
  const { topic } = useParams();
  const [sorter, setSorter] = useState({
    sort_by: "created_at",
    order: "desc",
  });
  const [submitSorter, setSubmitSorter] = useState({});
  const { articleList, isLoading } = useFetchArticles(topic, submitSorter);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isChecked, setIsChecked] = useState("desc");
  const [selector, setSelector] = useState("created_at");
  const [pageLow, setpageLow] = useState(0);
  const [pageHigh, setpageHigh] = useState(12);

  const location = useLocation();
  const teal = "teal";

  const sortHandler = (event) => {
    event.preventDefault();
    setSearchParams(sorter);
    setSubmitSorter(sorter);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setpageLow(0);
      setpageHigh(12);
    }
    if (location.pathname === "/2") {
      setpageLow(12);
      setpageHigh(24);
    }
    if (location.pathname === "/3") {
      setpageLow(24);
      setpageHigh(36);
    }
  }, [location.pathname]);

  const handleChange = (event) => {
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

  if (isLoading) return <CircularProgress sx={{ color: teal, mt: 2 }} />;
  return (
    <main>
      {isLoading === "true" && <CircularProgress sx={{ color: teal, mt: 2 }} />}
      <form className="sort">
        <label htmlFor="sortBy">Sort By: </label>
        <select
          id="sortBy"
          value={selector}
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value="created_at">Date Published</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Vote Count</option>
        </select>

        <div class="toggle-radio">
          <input
            type="radio"
            name="order"
            id="desc"
            onChange={(event) => {
              handleChange(event);
            }}
            value="desc"
            checked={"desc" === isChecked}
          />
          <input
            type="radio"
            name="order"
            id="asc"
            onChange={(event) => {
              handleChange(event);
            }}
            value="asc"
            checked={"asc" === isChecked}
          />
          <div class="switch">
            <label for="desc">Desc</label>
            <label for="asc">Asc</label>
            <span></span>
          </div>
        </div>

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
          {articleList.slice(pageLow, pageHigh).map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
      <div className="pageMenu">
        <Link to="/">1</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
      </div>
    </main>
  );
}

// TODO: Pagination

export default ArticleList;
