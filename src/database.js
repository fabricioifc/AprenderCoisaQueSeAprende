//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from "./firebaseconfig";

let initDb = firebase.initializeApp(firebaseconfig);

export const db = initDb.firestore();
//export const realdb = initDb.database();
export const auth = initDb.auth();
export const paginasRef = db.collection("paginas");
//export const questoes = db.collection("paginas");
