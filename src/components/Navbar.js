import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/pasta-logo2.png";
// logo made by monkik https://www.flaticon.com/authors/monkik

const Navbar = () => {
  const [show, setshow] = useState(false); //don't show navlinks when false

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply pastas logo" className="logo" />
          </Link>
          <button className="nav-btn" onClick={() => setshow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setshow(false)}
          >
            home
          </Link>
          <Link
            to="/shapes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setshow(false)}
          >
            shapes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setshow(false)}
          >
            tags
          </Link>
          <Link
            to="/blog"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setshow(false)}
          >
            blogs
          </Link>
          {/* <Link
            to="/new-recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setshow(false)}
          >
            new!
          </Link> */}
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setshow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setshow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
