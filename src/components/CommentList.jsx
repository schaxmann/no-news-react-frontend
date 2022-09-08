import "../styling/ArticleList.css";
import { useFetchComments } from "../hooks/useFetch";
import CommentCard from "./CommentCard";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/joy";

function CommentList(props) {
  const { article, hasCommented, setHasCommented } = props;
  const { commentList, isLoading } = useFetchComments(article, hasCommented);
  const cream = "#f4f1d0";

  if (isLoading) return <CircularProgress sx={{ color: cream }} />;
  return (
    <ul id="commentList">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, minmax(300px, 1fr))",
          gap: 4,
        }}
      >
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
      </Box>
    </ul>
  );
}

export default CommentList;
