import { useParams } from "react-router-dom";
import { useState } from "react";
import CommentList from "./CommentList";
import CommentPost from "./CommentPost";

function Comments() {
  const [hasCommented, setHasCommented] = useState(0);
  const { article } = useParams();
  return (
    <section className="comments">
      <CommentPost
        article={article}
        hasCommented={hasCommented}
        setHasCommented={setHasCommented}
      />
      <CommentList
        article={article}
        hasCommented={hasCommented}
        setHasCommented={setHasCommented}
      />
    </section>
  );
}

export default Comments;
