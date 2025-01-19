
  // TODO: Add necessary code to display the navigation bar and link between the page

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <NavLink
        to="/"
        style={styles.link}
        activeStyle={styles.activeLink}
        end
      >
        Candidate Search
      </NavLink>
      <NavLink
        to="/saved-candidates"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Saved Candidates
      </NavLink>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  link: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
  activeLink: {
    textDecoration: "underline",
    color: "#0056b3",
  },
};

export default Nav;

