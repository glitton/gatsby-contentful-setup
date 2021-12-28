import React from "react";
import { graphql } from "gatsby";
import ShapesRecipes from "../components/ShapesRecipes";
import SeoComp from "../components/SeoComp";

const Contact = ({ data }) => {
  const shapesRecipes = data.allContentfulShapesRecipes.nodes;
  return (
    <>
      <SeoComp title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Contact Us Now!</h3>
            <p>
              Send us a message and we will review your contribution and feature
              it in our shape and recipe of the month!
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xdoykydy"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Buon appetito!</h5>
          <ShapesRecipes shapesRecipes={shapesRecipes} />
        </section>
      </main>
    </>
  );
};

export const query = graphql`
  {
    allContentfulShapesRecipes(
      sort: { fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default Contact;
