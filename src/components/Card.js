import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ items }) {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <Link to={`/cardPage/${item?.id}`}>Card Page</Link>
      ))}
    </>
  );
}

export default Card;
