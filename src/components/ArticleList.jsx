import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchArticles from "../utils/RequestUtils";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css";

function ItemList() {
  const [articleList, setArticleList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articlesFromApi) => {
      setArticleList(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <progress></progress>;
  return (
    <main>
      <h2 id="listTitle">Check Out These Articles ⬇️</h2>
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

export default ItemList;
