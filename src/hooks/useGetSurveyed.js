import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { userCollectionRef } from "../utils/collectionFirebase";

const useGetSurveyed = () => {
  const [response, setResponse] = useState();

  const mapSurveyedPeople = (doc) => ({
    data: doc.data(),
    id: doc.id,
  });

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await getDocs(userCollectionRef);
        const surveyed = res.docs.map(mapSurveyedPeople);
        setResponse(surveyed);
      } catch (error) {
        console.log(error);
      }
    };

    getResponse();
  }, []);

  return response;
};

export { useGetSurveyed };
