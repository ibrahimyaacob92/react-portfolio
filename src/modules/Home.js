import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>link</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
};

export default Home;
