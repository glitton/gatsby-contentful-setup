import React from "react";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <div className="page">
      {data.allMdx.nodes.map(node => {
        return (
          <article key={node.id}>
            <h4>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h4>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        body
        slug
      }
    }
  }
`;

export default BlogPage;
