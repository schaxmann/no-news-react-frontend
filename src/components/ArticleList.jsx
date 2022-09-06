import { useParams, useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "../styling/ArticleList.css";
import { useFetchArticles } from "../hooks/useFetch";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { Box } from "@mui/joy";

function ArticleList() {
  const { topic } = useParams();
  const [sorter, setSorter] = useState({
    sort_by: "created_on",
    order: "desc",
  });
  const [submitSorter, setSubmitSorter] = useState({});
  const { articleList, isLoading } = useFetchArticles(topic, submitSorter);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isChecked, setIsChecked] = useState("desc");
  const [selector, setSelector] = useState("created_at");

  const sortHandler = (event) => {
    event.preventDefault();
    setSearchParams(sorter);
    setSubmitSorter(sorter);
  };

  const handleChange = (event) => {
    if (
      event === "created_at" ||
      event === "comment_count" ||
      event === "votes"
    ) {
      const newSorter = { ...sorter };
      newSorter.sort_by = event;
      setSelector(event);
      setSorter(newSorter);
    } else {
      const newSorter = { ...sorter };
      newSorter.order = event.target.value;
      setIsChecked(event.target.value);
      setSorter(newSorter);
    }
  };

  if (isLoading) return <CircularProgress />;
  return (
    <main>
      <form className="sort">
        <Box
          display="flex"
          flexDirection="row"
          sx={{ justifyContent: "flex-end" }}
        >
          <Box>
            {" "}
            <label htmlFor="sortBy">Sort By: </label>
          </Box>
          <Box>
            <Select
              id="sortBy"
              name="melon"
              value={selector}
              onChange={(event) => {
                handleChange(event);
              }}
              sx={{ minWidth: "20%" }}
            >
              <Option value="created_at">Date Published</Option>
              <Option value="comment_count">Comment Count</Option>
              <Option value="votes">Vote Count</Option>
            </Select>
          </Box>
          <Box>
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
            {/* <a class="waves-effect waves-light btn">button</a> */}
            <Button
              variant="outlined"
              sx={{ borderRadius: 0 }}
              size="sm"
              onClick={(event) => {
                sortHandler(event);
              }}
            >
              Sort
            </Button>
          </Box>
        </Box>
        {/* <Box sx={{ width: "20%" }}>
          <Select
            id="sortBy"
            name="melon"
            value={selector}
            onChange={(event) => {
              handleChange(event);
            }}
            sx={{ minWidth: "20%" }}
          >
            <Option value="created_at">Date Published</Option>
            <Option value="comment_count">Comment Count</Option>
            <Option value="votes">Vote Count</Option>
          </Select>
        </Box> */}
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
