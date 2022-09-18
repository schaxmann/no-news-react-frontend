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

const re = new RegExp("/(^=[A-Za-z0-9]&$)w+/g");

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
  const [page1, setpage1] = useState("underlineLink");
  const [page2, setpage2] = useState("normalLink");
  const [page3, setpage3] = useState("normalLink");

  const location = useLocation();
  const teal = "teal";

  const sortHandler = (event) => {
    event.preventDefault();
    setSearchParams(sorter);
    setSubmitSorter(sorter);
  };

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/coding" ||
      location.pathname === "/football" ||
      location.pathname === "/cooking"
    ) {
      setpageLow(0);
      setpageHigh(12);
      setpage3("normalLink");
      setpage2("normalLink");
      setpage1("underlineLink");
    }
    if (location.pathname === "/2") {
      setpageLow(12);
      setpageHigh(24);
      setpage1("normalLink");
      setpage3("normalLink");
      setpage2("underlineLink");
    }
    if (location.pathname === "/3") {
      setpageLow(24);
      setpageHigh(36);
      setpage1("normalLink");
      setpage2("normalLink");
      setpage3("underlineLink");
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

        <div className="toggle-radio">
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
          <div className="switch">
            <label htmlFor="desc">Desc</label>
            <span></span>
            <label htmlFor="asc">Asc</label>
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
      {location.pathname === "/" ||
      location.pathname === "/2" ||
      location.pathname === "/3" ? (
        <div className="pageMenu">
          <Link className={page1} to={`/${location.search}`}>
            1
          </Link>
          <Link className={page2} to={`/2${location.search}`}>
            2
          </Link>
          <Link className={page3} to={`/3${location.search}`}>
            3
          </Link>
        </div>
      ) : (
        <div className="SinglePageMenu">
          <Link className="underlineLink" to={`/${location.search}`}>
            1
          </Link>
        </div>
      )}
    </main>
  );
}

// TODO: Pagination

export default ArticleList;
