import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Post from "./pages/Post";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Showpost from './pages/Showpost';
import Editpost from './pages/Editpost';
import Showlist from './pages/Showlist';

function App() {
  const URL = "https://capstone-project22.herokuapp.com";

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/list" element={<List URL={URL} />} />
        <Route path="/list/:id" element={<Showlist URL={URL} />} />
        <Route path="/post" element={<Post URL={URL} />} />
        <Route path="/post/:id" element={<Showpost URL={URL}/>} />
        <Route path="/post/:id/edit" element={<Editpost URL={URL}/>} />
        <Route path="/login" element={<Login URL={URL} />} />
        <Route path="/register" element={<Register URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
