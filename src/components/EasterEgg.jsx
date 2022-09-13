import { useParams, Link } from "react-router-dom";
import "../styling/ArticlePage.css";
import { useFetchArticle } from "../hooks/useFetch";
import Votes from "./Votes";
import Comments from "./Comments";
import { CircularProgress } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faBowlFood,
  faCode,
  faUtensils,
  faUtensilSpoon,
  faCaretRight,
  faAnglesRight,
  faRightLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { CenterFocusStrong } from "@mui/icons-material";

function EasterEgg() {
  const { article } = useParams();
  const { currentArticle, isLoading } = useFetchArticle(article);
  const teal = "teal";

  function formatDate(date) {
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + " " + day + " " + year;
  }

  return (
    <main>
      <article className="mainArticles">
        <h2 className="articleTitle">Here, have an Easter Egg</h2>
        <h4>Unfortunately, grumpy19 isn't real.</h4>
        <p>
          However, Zack (the developer of this website) is.
          <br />
          <br />
          Whilst he may not be grumpy or 19, he is currently looking for an
          opportunity within a forward-thinking technology company.
          <br />
          <br />
          If you happen to work for (or recruit for) one, he'd love to hear from
          you!
        </p>
        <h4>
          Find him on:
          <a className="socialLink" href="https://github.com/schaxmann">
            <FontAwesomeIcon className="fa" icon={faGithub} />
            GitHub
          </a>
          <a
            className="socialLink"
            href="https://www.linkedin.com/in/schaxmann/"
          >
            <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
            LinkedIn
          </a>
          <a className="socialLink" href="mailto:schaxmann@gmail.com">
            <FontAwesomeIcon className="fa" icon={faEnvelope} />
            schaxmann@gmail.com
          </a>
        </h4>
      </article>
    </main>
  );
}

export default EasterEgg;
