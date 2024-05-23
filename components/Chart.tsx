// components/Graph.tsx

import React from 'react';
import { Chart as ChartJS, LineElement, PointElement, Legend, Tooltip, CategoryScale,LinearScale, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import PulseAnimation from './PulseAnimation';

// types/data.ts

export interface GraphData {
    labels: string[];
    data: number[];
  }
  
// Somewhere in your app's initialization (e.g., _app.tsx or a global component)


ChartJS.register(CategoryScale, LinearScale,PointElement, LineElement, ArcElement, Legend, Tooltip);

const Graph: React.FC<GraphData & { animationDuration?: number }> = ({
  labels,
  data,
  animationDuration = 1, // Adjust duration as needed
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: '', // No label needed
        data,
        backgroundColor: 'rgba(0, 255, 0, 0.2)', // Green from your description (transparent)
        borderColor: 'green', // Green from your description
        pointRadius: 5, // Adjust point size as needed
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <PulseAnimation duration={animationDuration}>
      <Line className='h-[200px]' data={chartData} options={options as any} />
    </PulseAnimation>
  );
};

export default Graph;
