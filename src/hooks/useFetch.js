import axios from "axios";
import { useState, useEffect } from "react";

const useFetchArticles = (topic) => {
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

const useFetchArticle = (article) => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://schaxmann-news.herokuapp.com/api/articles/${article}`)
      .then(({ data }) => {
        return data.article;
      })
      .then((articleFromApi) => {
        setCurrentArticle(articleFromApi);
        setIsLoading(false);
      });
  }, [article]);

  return { currentArticle, isLoading };
};

const useFetchComments = (article) => {
  const [commentList, setCommentList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://schaxmann-news.herokuapp.com/api/articles/${article}/comments`
      )
      .then(({ data }) => {
        return data.comments;
      })
      .then((commentsFromApi) => {
        setCommentList(commentsFromApi);
        setIsLoading(false);
      });
  }, [article]);

  return { commentList, isLoading };
};

export { useFetchArticles, useFetchArticle, useFetchComments };
