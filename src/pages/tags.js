import React from "react";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import SeoComp from "../components/SeoComp";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulShapesRecipes.nodes);

  return (
    <>
      <SeoComp title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, { lower: true });
            return (
              <Link to={`/${tagSlug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>recipes: {value} </p>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};

export const query = graphql`
  {
    allContentfulShapesRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
