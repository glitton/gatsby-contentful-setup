import React from "react";
import { graphql } from "gatsby";
import ShapesRecipes from "../components/ShapesRecipes";
import SeoComp from "../components/SeoComp";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulShapesRecipes.nodes;
  return (
    <>
      <SeoComp title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <ShapesRecipes shapesRecipes={recipes} />
        </div>
      </main>
    </>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulShapesRecipes(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default TagTemplate;
