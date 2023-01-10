import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import { getSurveyedById } from "../hooks/useSurveyedById";

const CardPage = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getById = async () => {
      const res = await getSurveyedById(id);
      setItem(res);
    };

    getById();
  }, [id]);

  return (
    <div>
      <Details
        name={item?.full_name}
        email={item?.email}
        country={item?.country_of_origin}
        terms={item?.terms_and_conditions}
        birth={item?.birth_date}
      />
    </div>
  );
};

export default CardPage;
