import axios from "axios";

const fetchArticles = () => {
  return axios
    .get(`https://schaxmann-news.herokuapp.com/api/articles/`)
    .then(({ data }) => {
      return data.articles;
    });
};

export default fetchArticles;
