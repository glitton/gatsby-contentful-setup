import React from "react";
import TagsList from "./TagsList";
import ShapesRecipes from "./ShapesRecipes";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allContentfulShapesRecipes(sort: { fields: title }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const AllShapesRecipes = () => {
  const data = useStaticQuery(query);
  const shapesRecipes = data.allContentfulShapesRecipes.nodes;

  return (
    <section className="recipes-container">
      <TagsList shapesRecipes={shapesRecipes} />
      <ShapesRecipes shapesRecipes={shapesRecipes} />
    </section>
  );
};

export default AllShapesRecipes;
