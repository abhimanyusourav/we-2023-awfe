// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDafVr7jHng5O99jprKK8pqN6m6phx_a7E",
  authDomain: "lb-we-2023-66727.firebaseapp.com",
  databaseURL:
    "https://lb-we-2023-66727-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lb-we-2023-66727",
  storageBucket: "lb-we-2023-66727.appspot.com",
  messagingSenderId: "451630847530",
  appId: "1:451630847530:web:31b716b3dcbd5c49705553",
  measurementId: "G-CNPG4CP7GW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);