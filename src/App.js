import HostelStatsCharts from "./components/HostelStatsCharts";
import UserStatsCharts from "./components/UserStatsCharts";

function App() {
  return (
    <div>
      <h1>HostelApp Admin Dashboard</h1>
      <HostelStatsCharts />
      <UserStatsCharts/>
    </div>
  );
}

export default App;