import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css";

function ItemList() {
  const [articleList, setArticleList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://schaxmann-news.herokuapp.com/api/articles/`)
      .then((res) => res.json())
      .then((body) => {
        setArticleList(body.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <main>
        <h2 id="listTitle">Check Out These Articles ⬇️</h2>
        <section>
          <ul id="articleList">
            {articleList.map((article) => {
              return <ArticleCard article={article} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

// TODO: Pagination

export default ItemList;
