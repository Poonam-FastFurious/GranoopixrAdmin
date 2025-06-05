/* eslint-disable react/prop-types */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

function Dashboard() {
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [500, 700, 400, 800, 600, 750],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Sales" },
    },
  };

  const categoryData = {
    labels: ["Electronics", "Fashion", "Home", "Books", "Sports"],
    datasets: [
      {
        label: "Categories",
        data: [300, 200, 150, 100, 250],
        backgroundColor: [
          "#6366f1",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#3b82f6",
        ],
        borderWidth: 1,
      },
    ],
  };

  const categoryOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: { display: false },
    },
  };

  return (
    <div className="body-content px-8 py-8 bg-slate-100">
      <div className="flex justify-between items-end flex-wrap">
        <div className="page-title mb-7">
          <h3 className="mb-0 text-4xl">Dashboard</h3>
          <p className="text-textBody m-0">Welcome to your dashboard</p>
        </div>
        
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <Widget title="140" subtitle="Today Orders" growth="12%" color="bg-success" />
        <Widget title="41" subtitle="Total Sales" growth="444" color="bg-purple" />
        <Widget title="445454" subtitle="New Customers This Month" growth="44" color="bg-info" />
        <Widget title="32" subtitle="Pending Orders" growth="5%" color="bg-danger" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-md h-[400px]">
          <Line data={salesData} options={salesOptions} />
        </div>
        <div className="bg-white p-6 rounded-md h-[400px]">
          <Doughnut data={categoryData} options={categoryOptions} />
        </div>
      </div>
    </div>
  );
}

const Widget = ({ title, subtitle, growth, color }) => (
  <div className="widget-item bg-white p-6 flex justify-between rounded-md">
    <div>
      <h4 className="text-xl font-semibold text-slate-700 mb-1 leading-none">
        {title}
      </h4>
      <p className="text-tiny leading-4">{subtitle}</p>
      <div className={`badge space-x-1 text-white ${color}/90`}>
        <span>{growth}</span>
      </div>
    </div>
    <div>
      <span
        className={`text-lg text-white rounded-full flex items-center justify-center h-12 w-12 shrink-0 ${color}`}
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l4-4m0 0l-4-4m4 4H4"></path>
        </svg>
      </span>
    </div>
  </div>
);

export default Dashboard;
