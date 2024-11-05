import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMa9C2EXcZ9ULgLq0tYUuK3ftCviA3Hj0",
  authDomain: "sus-iot.firebaseapp.com",
  databaseURL: "https://sus-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sus-iot",
  storageBucket: "sus-iot.firebasestorage.app",
  messagingSenderId: "162380530275",
  appId: "1:162380530275:web:141c2863daec572122ee56",
  measurementId: "G-M4XEZP7RDR"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);