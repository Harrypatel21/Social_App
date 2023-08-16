import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPosts } from "../apis";
import { Home, Login } from "../pages";
import { Loader, Navbar } from "./";

const About = () => {
  return <h1>about</h1>;
};
const PageNotFound = () => {
  return <h1>404 page not found</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoader] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      // console.log(response);

      if (response.success) {
        setPosts(response.data);
      }
      setLoader(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  // console.log(posts);
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
