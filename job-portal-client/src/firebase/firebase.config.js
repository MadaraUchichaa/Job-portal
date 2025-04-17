// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUfTmwawa8PToewtsZVUsv-nMi5j1_2E",
  authDomain: "job-portal-demo-e5953.firebaseapp.com",
  projectId: "job-portal-demo-e5953",
  storageBucket: "job-portal-demo-e5953.appspot.com",
  messagingSenderId: "883120880870",
  appId: "1:883120880870:web:a1582ed342ecf88ee4cf27",
  measurementId: "G-22YR6EL8EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
