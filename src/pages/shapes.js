import React from "react";
import AllShapesRecipes from "../components/AllShapesRecipes";
import SeoComp from "../components/SeoComp";

const Shapes = () => {
  return (
    <>
      <SeoComp title="Shapes" />
      <main className="page">
        <AllShapesRecipes />
      </main>
    </>
  );
};

export default Shapes;
