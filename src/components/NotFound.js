import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__404">404</h2>
      <p className="not-found__message">page not found</p>
      <Link to="/" className="not-found__home">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
