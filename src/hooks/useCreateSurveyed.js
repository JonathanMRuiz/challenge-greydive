import { addDoc } from "firebase/firestore";
import { userCollectionRef } from "../utils/collectionFirebase";

const PostSurveyed = async (form) => {
  try {
    await addDoc(userCollectionRef, form);

    if (!alert("Form Submitted successfully")) {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

export { PostSurveyed };
