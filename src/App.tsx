import React from 'react';
import { Thermometer, Droplets, Wind } from 'lucide-react';
import { SensorCard } from './components/SensorCard';
import { SensorChart } from './components/SensorChart';
import { useSensorData } from './hooks/useSensorData';

function App() {
  const { data: temperatureData, currentValue: currentTemp } = useSensorData('temp');
  const { data: humidityData, currentValue: currentHumidity } = useSensorData('humidity');
  const { data: gasData, currentValue: currentGas } = useSensorData('gas-value');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Environmental Monitoring Dashboard</h1>
          <p className="text-gray-600 mt-2">Real-time sensor data visualization</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SensorCard
            Icon={Thermometer}
            title="Temperature"
            value={currentTemp}
            unit="°C"
            iconColor="text-red-500"
          />
          <SensorCard
            Icon={Droplets}
            title="Humidity"
            value={currentHumidity}
            unit="%"
            iconColor="text-blue-500"
          />
          <SensorCard
            Icon={Wind}
            title="Gas Level"
            value={currentGas}
            unit=" ppm"
            iconColor="text-green-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SensorChart
            data={temperatureData}
            color="#EF4444"
            title="Temperature History"
            unit="°C"
          />
          <SensorChart
            data={humidityData}
            color="#3B82F6"
            title="Humidity History"
            unit="%"
          />
          <SensorChart
            data={gasData}
            color="#10B981"
            title="Gas Level History"
            unit=" ppm"
          />
        </div>
      </div>
    </div>
  );
}

export default App;