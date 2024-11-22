import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import PostList from "./components/Postlist";
import PostForm from "./components/Postform";
import PostDetails from "./components/Postdetail";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/add" element={<PostForm />} />
      <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  </Router>
);

export default App;
