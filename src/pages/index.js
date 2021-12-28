import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AllShapesRecipes from "../components/AllShapesRecipes";
import SeoComp from "../components/SeoComp";

export default function Home() {
  return (
    <>
      <SeoComp title="Home" />
      <main className="page">
        <header className="hero">
          {/* Photo by Zoran Borojevic on Unsplash */}
          <StaticImage
            src="../assets/images/main.jpg"
            alt="flour and eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
            loading="eager"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Shapes</h1>
              <h4>pasta shapes with bonus recipes</h4>
            </div>
          </div>
        </header>
        <AllShapesRecipes />
      </main>
    </>
  );
}
