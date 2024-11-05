import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  timestamp: number;
  value: number;
}

interface TimeSeriesChartProps {
  data: DataPoint[];
  color: string;
  unit: string;
  label: string;
}

export const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({
  data,
  color,
  unit,
  label,
}) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
            stroke="#9CA3AF"
          />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#F3F4F6',
            }}
            labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
            formatter={(value: number) => [`${value}${unit}`, label]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};