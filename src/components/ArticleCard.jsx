import "./ArticleCard.css";

function ArticleCard(props) {
  const { article } = props;
  return (
    <>
      <li className="articleCard" key={article.article_id}>
        <h3>{article.title}</h3>
        <h4>Published: {article.created_at.split("T")[0]}</h4>
        <h4>Author: {article.author}</h4>
        <p className="articleInfo">Topic: {article.topic}</p>
        <p className="articleInfo">Votes: {article.votes}</p>
        <p className="articleInfo">Comments: {article.comment_count}</p>
        <button>Read Now</button>
      </li>
    </>
  );
}

export default ArticleCard;
