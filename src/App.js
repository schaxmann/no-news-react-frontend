import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/shop" element={<ArticleList />} />
        <Route path="/shop" element={<ArticleList />} />
        <Route path="/shop" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
