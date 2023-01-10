import { doc, getDoc } from "firebase/firestore";
import { userCollectionRef } from "../utils/collectionFirebase";

const getSurveyedById = async (id) => {
  try {
    const snap = await getDoc(doc(userCollectionRef, id));

    if (snap.exists()) {
      return snap.data();
    } else {
      console.log("No such document");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSurveyedById };
