import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Simply Shapes</span> Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  );
};
//Based on SimplyRecipes Gatsby V3 tutorial of John Smilga https://github.com/john-smilga/gatsby-v3-tutorial-recipes
export default Footer;
