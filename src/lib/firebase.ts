import { getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDKq6SBQ_fCx5IIPcXjzRMcmEIStDo4MgI",
  projectId: "sus-iot",
  databaseURL: "https://sus-iot-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase only if no apps exist
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getDatabase(app);