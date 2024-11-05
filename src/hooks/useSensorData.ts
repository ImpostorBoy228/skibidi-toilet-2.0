import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../lib/firebase';

export interface SensorData {
  timestamp: number;
  value: number;
}

export const useSensorData = (path: string) => {
  const [data, setData] = useState<SensorData[]>([]);
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    const sensorRef = ref(db, path);

    const unsubscribe = onValue(sensorRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) {
        const newDataPoint = { timestamp: Date.now(), value };
        setData(prev => [...prev, newDataPoint].slice(-20));
        setCurrentValue(value);
      }
    });

    return () => unsubscribe();
  }, [path]);

  return { data, currentValue };
};