import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRandomNumber } from "../../utils/helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        color: "#777777",
      },
      ticks: {
        color: "#fff",
      },
      
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => getRandomNumber(-1000, 1000)),
      borderColor: "#FFCC21",
      backgroundColor: "rgba(255, 204, 33, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getRandomNumber(-1000, 1000)),
      borderColor: "#8FE9D0",
      backgroundColor: "rgba(143, 233, 208, 0.5)",
    },
  ],
};

export default function Chart() {
  return (
    <Line
      options={options}
      data={data}
      style={{ backgroundColor: "#2E2E2E" }}
    />
  );
}
