import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph: React.FC<{}> = () => {
  const options = {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
  };

  const labels = [
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
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        // data: [6, 15, 3, 28, 9, 45, 10, 19, 32, 4, 30, 27],
        data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
        borderColor: "#34CAA5",
        backgroundColor: "#34CAA51A",
      },
    ],
  };

  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="px-1 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
        <div className="platform-tittle d-flex align-items-center justify-content-between mb-4 pb-0 pt-1">
          <h2>Sales Trends</h2>
          <div className="d-flex align-items-center" style={{ gap: "0.8rem" }}>
            <span>Short by:</span>
            <select name="short" id="short">
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="yearly">yearly</option>
            </select>
          </div>
        </div>

        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Graph;
