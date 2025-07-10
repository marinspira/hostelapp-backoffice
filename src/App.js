import DashboardLayout from "./components/DashboardLayout";
import PanelFactory from "./components/DraggingPanelFactory";
import { fetchHostelStats, fetchUserStats } from "./services/api"

function App() {

  const hostelsCharts = [
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

  const userCharts = [
    {
      key: "usersByRole",
      type: "pie",
      title: "Users by role",
      dataKey: "usersByRole",
      defaultPos: { x: 0, y: 0 },
      minHeight: 150,
    },
  ];

  return (
    <DashboardLayout
      contentMap={{
        hostels:
          <PanelFactory
            key="hostels"
            charts={hostelsCharts}
            dataFetcher={() => fetchHostelStats().then(res => res.data.data)}
            name="Hostel Statistics"
          />,
        logs: <p>Logs</p>,
        users:
          <PanelFactory
            key="users"
            charts={userCharts}
            dataFetcher={() => fetchUserStats().then(res => res.data.data)}
            name="Users Statistics"
          />,
      }}
      items={[
        { key: "hostels", label: "Hostel Statistics" },
        { key: "logs", label: "Logs" },
        { key: "users", label: "Users" },
      ]}
    />
  );
}

export default App;

const styles = {
  container: {
    padding: "40px"
  }
}