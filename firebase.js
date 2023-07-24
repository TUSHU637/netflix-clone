import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAwy7eqRYuwFs-KG7zbSJI0fttXxOnTJi4",
    authDomain: "netflix-clone-b9971.firebaseapp.com",
    projectId: "netflix-clone-b9971",
    storageBucket: "netflix-clone-b9971.appspot.com",
    messagingSenderId: "441027740065",
    appId: "1:441027740065:web:5e583b12981fb8b2754be0"
  };
  
  const firebaseApp=initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
console.log(auth)
export { auth };