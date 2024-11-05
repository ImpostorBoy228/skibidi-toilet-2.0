import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: number;
  unit: string;
  Icon: LucideIcon;
  trend?: 'up' | 'down' | 'stable';
  color: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  value, 
  unit, 
  Icon,
  trend,
  color
}) => {
  return (
    <div className={`${color} rounded-xl p-6 text-white transition-transform hover:scale-105 duration-300`}>
      <div className="flex items-center justify-between">
        <Icon size={24} className="opacity-80" />
        <div className="text-right">
          <p className="text-sm opacity-80">{title}</p>
          <p className="text-2xl font-bold mt-1">
            {value}{unit}
          </p>
        </div>
      </div>
    </div>
  );
};