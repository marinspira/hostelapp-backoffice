import PanelFactory from "./components/PanelFactory";
import { fetchHostelStats } from "./services/api"

function App() {

  const hostelCharts = [
    {
      key: "popularity",
      type: "pie",
      title: "Popularity",
      dataKey: "hostelsByPopularity",
      defaultPos: { x: 0, y: 0 },
      minHeight: 150,
    },
    {
      key: "country",
      type: "pie",
      title: "Country",
      dataKey: "hostelsByCountry",
      defaultPos: { x: 420, y: 0 },
      minHeight: 150,
    },
    {
      key: "city",
      type: "doughnut",
      title: "City",
      dataKey: "hostelsByCity",
      defaultPos: { x: 0, y: 320 },
      minHeight: 150,
    },
    {
      key: "size",
      type: "pie",
      title: "Size",
      dataKey: "hostelsBySize",
      defaultPos: { x: 420, y: 320 },
      minHeight: 150,
    },
  ];

  return (
    <div style={styles.container}>
      <h1>HostelApp Admin Dashboard</h1>
      <PanelFactory
        charts={hostelCharts}
        dataFetcher={() => fetchHostelStats().then(res => res.data.data)}
      />
    </div>
  );
}

export default App;

const styles = {
  container: {
    padding: "40px"
  }
}