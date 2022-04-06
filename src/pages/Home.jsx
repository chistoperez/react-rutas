import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h3>Home</h3>
        <p>Bienvenidos al tema de las Rutas en React</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default Home;
