import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "../styling/ArticleList.css";
import useFetch from "../hooks/useFetch";

function ItemList() {
  const { topic } = useParams();
  const { articleList, isLoading } = useFetch(topic);

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
