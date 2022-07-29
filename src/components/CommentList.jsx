import "../styling/ArticleList.css";
import { useFetchComments } from "../hooks/useFetch";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { article, hasCommented } = props;
  const { commentList, isLoading } = useFetchComments(article, hasCommented);

  if (isLoading) return <progress></progress>;
  return (
    <ul id="commentList">
      {commentList.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
}

export default CommentList;
