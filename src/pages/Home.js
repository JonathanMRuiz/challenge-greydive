import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getFormdata } from "../hooks/useFormData";
import CardPage from "./CardPage";

const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getFormdata(setResponse);
  }, []);

  const res = response.reduce((acc, current) => {
    const { full_name, birth_date, email, country_of_origin } = current.data;
    acc.push({
      id: current.id,
      name: full_name,
      date: birth_date,
      email: email,
      country: country_of_origin,
    });

    return acc;
  }, []);

  console.log(res);
  return (
    <>
      <Card items={res} />
      <CardPage items={res} />
    </>
  );
};

export default Home;
