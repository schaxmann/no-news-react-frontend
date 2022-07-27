import axios from "axios";

const fetchArticles = (topic) => {
  console.log(topic);
  return axios
    .get(`https://schaxmann-news.herokuapp.com/api/articles/`, {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export default fetchArticles;
