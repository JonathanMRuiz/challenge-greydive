import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const userCollectionRef = collection(db, "formdata");

const postFormdata = (form) => {
  try {
    addDoc(userCollectionRef, form).then(() => {
      if (!alert("Form Submitted successfully")) {
        return;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getFormdata = (setFormdata) => {
  try {
    getDocs(userCollectionRef).then((response) => {
      const formdata = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));

      setFormdata(formdata);
    });
  } catch (error) {
    console.log(error);
  }
};

export { postFormdata, getFormdata };
