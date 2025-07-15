import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCXNyclmXxpafYcOu3AteCIrjQFmcmQohc",
  authDomain: "clone-zaio-bc102.firebaseapp.com",
  projectId: "clone-zaio-bc102",
  storageBucket: "clone-zaio-bc102.appspot.com",
  messagingSenderId: "404973776246",
  appId: "1:404973776246:web:47f4c7b1c37c3f8a09de57",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth };
