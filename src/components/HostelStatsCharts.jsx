import { useEffect, useState } from "react";
import { fetchHostelStats } from "../services/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartFactory } from "./ChartFactory.tsx";

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

  return (
    <div  style={styles.container}>
      <h2>Hostel Statistics</h2>

      <div>
        <p>Total Hostels: {stats.totalHostels}</p>
        {/* <p>Average Rooms: {stats.averageRooms.toFixed(2)}</p> */}
        {/* <p>Hostels With Volunteers: {stats.hostelsWithVolunteers}</p> */}
      </div>

      <div style={styles.content}>
          <ChartFactory type="pie" title="Hostels by Popularity" data={stats.hostelsByPopularity} />
          <ChartFactory type="pie" title="Hostels by Country" data={stats.hostelsByCountry} />
          <ChartFactory type="doughnut" title="Hostels by City" data={stats.hostelsByCity} />
          <ChartFactory type="pie" title="Hostels by Size" data={stats.hostelsBySize} />
      </div>


    </div>
  );
};

export default HostelStatsCharts;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "20px",
    maxWidth: "100%",
    gap: "10px",
    borderRadius: "10px"
  },
  content: {
    display: "flex"
  }
}