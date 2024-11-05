import React from 'react';

interface GaugeProps {
  value: number;
  min: number;
  max: number;
  label: string;
  unit: string;
  color: string;
}

export const Gauge: React.FC<GaugeProps> = ({ value, min, max, label, unit, color }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="relative w-full">
      <div className="text-lg font-semibold mb-2">{label}</div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-700 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>{min}{unit}</span>
        <span className="font-medium">{value}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};