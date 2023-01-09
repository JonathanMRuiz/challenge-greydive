import React from "react";
import { useParams } from "react-router-dom";
const CardPage = ({ items }) => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      {items.map((item) => (
        <div key={id}>
          <p>{item?.name}</p>
          <p>{item?.email}</p>
          <p>{item?.country}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPage;
