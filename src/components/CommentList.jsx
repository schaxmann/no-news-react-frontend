import "../styling/ArticleList.css";
import { useFetchComments } from "../hooks/useFetch";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { article } = props;
  const { commentList, isLoading } = useFetchComments(article);

  if (isLoading) return <progress></progress>;
  return (
    <main>
      <section>
        <ul id="commentrList">
          {commentList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default CommentList;
