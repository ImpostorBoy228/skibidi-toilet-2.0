import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMa9C2EXcZ9ULgLq0tYUuK3ftCviA3Hj0",
  projectId: "sus-iot",
  databaseURL: "https://sus-iot-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);