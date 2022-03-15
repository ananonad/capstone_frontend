import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Post from "./pages/Post";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Showpost from './pages/Showpost';
import helpers from './pages/Login/helpers'
import Editpost from './pages/Editpost';
import Showlist from './pages/Showlist';
import "./App.css";

const { logoutUser } = helpers

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  const currentTime = Date.now() / 1000; // to get in milliseconds

  // Check for expired token
  if (decoded.exp <= currentTime) {
    // Logout user
    logoutUser()

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.jwtToken)
      setIsUserLoggedIn(true)
  }, [])

  const URL = "https://capstone-project22.herokuapp.com";

  return (
    <div className="App">
      <Header isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} logoutUser={logoutUser} />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/list" element={<List URL={URL} />} />
        <Route path="/list/:id" element={<Showlist URL={URL} />} />
        <Route path="/post" element={<Post URL={URL} />} />
        <Route path="/post/:id" element={<Showpost URL={URL}/>} />
        <Route path="/post/:id/edit" element={<Editpost URL={URL}/>} />
        <Route path="/login" element={<Login URL={URL} setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Route path="/register" element={<Register URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
