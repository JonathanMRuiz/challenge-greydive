import React from "react";
import Card from "../components/Card";
import { useGetSurveyed } from "../hooks/useGetSurveyed";

const Home = () => {
  const response = useGetSurveyed();

  return (
    <div className="flex flex-col h-[825px]">
      <div className="flex justify-center">
        <h1 className="text-white">Encuestados: {response?.length}</h1>
      </div>
      <div className="flex w-full flex-wrap justify-center">
        {response?.map((item) => (
          <div className="flex ">
            <Card id={item?.id} response={item.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
