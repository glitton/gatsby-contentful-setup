import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const ShapesRecipes = ({ shapesRecipes = [] }) => {
  return (
    <div className="recipes-list">
      {shapesRecipes.map(shapeRecipe => {
        const { id, title, image, prepTime, cookTime } = shapeRecipe;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });

        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} min. | Cook: {cookTime} min.
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ShapesRecipes;
