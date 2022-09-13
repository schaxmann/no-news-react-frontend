import "./App.css";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./components/ArticlePage";
import { CssVarsProvider } from "@mui/joy/styles";
import EasterEgg from "./components/EasterEgg";

function App() {
  return (
    <CssVarsProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/2" element={<ArticleList />} />
            <Route path="/3" element={<ArticleList />} />
            <Route path="/:topic" element={<ArticleList />} />
            <Route path="/articles/:article" element={<ArticlePage />} />
            <Route path="/user/grumpy19" element={<EasterEgg />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
