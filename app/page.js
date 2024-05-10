import styles from "./page.module.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTs8C_ovxykSx0ScXQHJbyGzLFZrK6trM",
  authDomain: "yunkhngn-backend.firebaseapp.com",
  projectId: "yunkhngn-backend",
  storageBucket: "yunkhngn-backend.appspot.com",
  messagingSenderId: "593226713448",
  appId: "1:593226713448:web:d216906c61f745f3b8eedd",
  measurementId: "G-Q5N34P3SHR"
};

const app = initializeApp(firebaseConfig);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

export default function Home() {
  return (
    <div className={styles.main}>
      
    </div>
  );
}
