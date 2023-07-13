import React from "react";
import Navbar from "./Navbar";
import Hero from "../components/ui/Hero";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import { TopBooks } from "./TopBooks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Login />
      <Register />
      <Footer />
      <TopBooks />
    </div>
  );
};

export default Home;
