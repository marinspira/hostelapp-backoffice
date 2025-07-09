import { useEffect, useState } from "react";
import { fetchHostelStats } from "../services/api";
import {
  Pie,
  Bar,
  Doughnut,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

const HostelStatsCharts = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchHostelStats()
      .then((res) => setStats(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return <p>Loading...</p>;

  const makePieData = (obj) => ({
    labels: Object.keys(obj),
    datasets: [
      {
        label: "Count",
        data: Object.values(obj),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Hostel Statistics Dashboard</h2>

      <div style={{ maxWidth: 500 }}>
        <h3>Hostels by Size</h3>
        <Pie data={makePieData(stats.hostelsBySize)} />
      </div>

      <div style={{ maxWidth: 500 }}>
        <h3>Hostels by Popularity</h3>
        <Doughnut data={makePieData(stats.hostelsByPopularity)} />
      </div>

      <div style={{ maxWidth: 700 }}>
        <h3>Hostels by Country</h3>
        <Bar
          data={makePieData(stats.hostelsByCountry)}
          options={{
            indexAxis: "y",
            responsive: true,
          }}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p>Total Hostels: {stats.totalHostels}</p>
        {/* <p>Average Rooms: {stats.averageRooms.toFixed(2)}</p> */}
        {/* <p>Hostels With Volunteers: {stats.hostelsWithVolunteers}</p> */}
      </div>

      <div style={{ maxWidth: 700, marginTop: "2rem" }}>
        <h3>Hostels by City</h3>
        <Bar
          data={makePieData(stats.hostelsByCity)}
          options={{
            indexAxis: "y",
            responsive: true,
          }}
        />
      </div>

    </div>
  );
};

export default HostelStatsCharts;
