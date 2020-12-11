import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header>
      <h1 >
        <Link to="/" className="title">virtual lolliPop</Link>
      </h1>
      <p className="subtitle">
        because we all know someone
        <br />
        who deserves some sugar.
      </p>
    </header>
  );
};

export default Header;
