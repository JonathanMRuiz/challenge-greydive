import { collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const userCollectionRef = collection(db, "formdata");
