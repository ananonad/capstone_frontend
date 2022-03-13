import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Post from "./pages/Post";

function App() {
  const URL = "https://capstone-project22.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/list" element={<List URL={URL} />} />
        <Route path="/post" element={<Post URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
