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
        <h2>Check Out These Articles ⬇️</h2>
        <section id="ArticleList">
          <ul>
            {articleList.map((article) => {
              return (
                <li key={article.article_id}>
                  <ArticleCard article={article} />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default ItemList;
