import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (topic) => {
  const [articleList, setArticleList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://schaxmann-news.herokuapp.com/api/articles/`, {
        params: {
          topic,
        },
      })
      .then(({ data }) => {
        return data.articles;
      })
      .then((articlesFromApi) => {
        setArticleList(articlesFromApi);
        setIsLoading(false);
      });
  }, [topic]);

  return { articleList, isLoading };
};

export default useFetch;
