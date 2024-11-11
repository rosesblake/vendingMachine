import React from "react";
import { Link } from "react-router-dom";

function Item({ name }) {
  return (
    <li>
      <Link to={`/${name}`}>{name}</Link>
    </li>
  );
}

export default Item;
