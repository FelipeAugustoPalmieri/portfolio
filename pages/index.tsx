import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";
import React from "react";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <Nav />
        {/* Hero section */}
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
