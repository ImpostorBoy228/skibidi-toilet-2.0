import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SensorCardProps {
  Icon: LucideIcon;
  title: string;
  value: number;
  unit: string;
  iconColor: string;
}

export const SensorCard: React.FC<SensorCardProps> = ({ 
  Icon, 
  title, 
  value, 
  unit, 
  iconColor 
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      <Icon className={`w-12 h-12 ${iconColor} mr-4`} />
      <div>
        <p className="text-gray-600">{title}</p>
        <p className="text-2xl font-bold">
          {value?.toFixed(1)}{unit}
        </p>
      </div>
    </div>
  );
};