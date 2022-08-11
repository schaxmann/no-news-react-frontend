import "../styling/ArticleList.css";
import { useFetchComments } from "../hooks/useFetch";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { article, hasCommented, setHasCommented } = props;
  const { commentList, isLoading } = useFetchComments(article, hasCommented);

  if (isLoading) return <progress></progress>;
  return (
    <ul id="commentList">
      {commentList.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            article={article}
            hasCommented={hasCommented}
            setHasCommented={setHasCommented}
          />
        );
      })}
    </ul>
  );
}

export default CommentList;
