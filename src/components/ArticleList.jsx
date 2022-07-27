import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchArticles from "../utils/RequestUtils";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css";

function ItemList() {
  const [articleList, setArticleList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then((articlesFromApi) => {
      setArticleList(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

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
