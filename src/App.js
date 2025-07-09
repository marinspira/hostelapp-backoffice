import HostelStatsCharts from "./components/HostelStatsCharts";
import UserStatsCharts from "./components/UserStatsCharts";

function App() {
  return (
    <div style={styles.container}>
      <h1>HostelApp Admin Dashboard</h1>
      <HostelStatsCharts />
      <UserStatsCharts/>
    </div>
  );
}

export default App;

const styles = {
  container: {
    padding: "40px"
  }
}