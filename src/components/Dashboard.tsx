import React from 'react';
import { Thermometer, Droplets, Wind } from 'lucide-react';
import { StatusCard } from './StatusCard';
import { Gauge } from './Gauge';
import { TimeSeriesChart } from './TimeSeriesChart';

interface DashboardProps {
  sensorData: {
    humidity: number;
    temp: number;
    'gas-value': number;
  };
  historicalData: {
    temperature: Array<{ timestamp: number; value: number }>;
    humidity: Array<{ timestamp: number; value: number }>;
    gasLevel: Array<{ timestamp: number; value: number }>;
  };
}

export const Dashboard: React.FC<DashboardProps> = ({ sensorData, historicalData }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Environmental Monitor</h1>
        <p className="text-gray-400">Real-time sensor data dashboard</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatusCard
          title="Temperature"
          value={sensorData.temp}
          unit="°C"
          Icon={Thermometer}
          color="bg-gradient-to-r from-orange-500 to-red-600"
        />
        <StatusCard
          title="Humidity"
          value={sensorData.humidity}
          unit="%"
          Icon={Droplets}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatusCard
          title="Gas Level"
          value={sensorData['gas-value']}
          unit="ppm"
          Icon={Wind}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Temperature History</h3>
          <TimeSeriesChart
            data={historicalData.temperature}
            color="#f97316"
            unit="°C"
            label="Temperature"
          />
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Humidity History</h3>
          <TimeSeriesChart
            data={historicalData.humidity}
            color="#3b82f6"
            unit="%"
            label="Humidity"
          />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
        <h3 className="text-xl font-semibold mb-4">Gas Level History</h3>
        <TimeSeriesChart
          data={historicalData.gasLevel}
          color="#a855f7"
          unit="ppm"
          label="Gas Level"
        />
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-8">
        <h2 className="text-2xl font-semibold mb-6">Detailed Metrics</h2>
        
        <Gauge
          value={sensorData.temp}
          min={0}
          max={50}
          label="Temperature"
          unit="°C"
          color="bg-gradient-to-r from-orange-500 to-red-600"
        />
        
        <Gauge
          value={sensorData.humidity}
          min={0}
          max={100}
          label="Humidity"
          unit="%"
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        
        <Gauge
          value={sensorData['gas-value']}
          min={0}
          max={1000}
          label="Gas Concentration"
          unit="ppm"
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
      </div>
    </div>
  );
};