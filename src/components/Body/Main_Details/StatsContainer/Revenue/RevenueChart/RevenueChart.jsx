import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const barData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        589.12, 840.2, 898.0, 203.0, 400.01, 920.12, 398.0, 882.0, 390.0, 910.0,
        410.12, 840.2,
      ],
      backgroundColor: "#523ccd",
      Colors: "white",
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      align: "end",
      color: 'black',
      formatter: (value) => "$" + `${value}`,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 200,
      },
      grid: {
        borderDash: [50, 50],
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const RevenueChart = () => {
  return (
    <div className="px-3 h-64">
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default RevenueChart;
