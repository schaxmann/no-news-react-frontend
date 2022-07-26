import "../styling/ArticleList.css";
import { useFetchComments } from "../hooks/useFetch";
import CommentCard from "./CommentCard";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/joy";

function CommentList(props) {
  const { article, hasCommented, setHasCommented } = props;
  const { commentList, isLoading } = useFetchComments(article, hasCommented);
  const teal = "teal";

  if (isLoading)
    return (
      <div className="loader">
        <CircularProgress sx={{ color: teal }} />;
      </div>
    );
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
