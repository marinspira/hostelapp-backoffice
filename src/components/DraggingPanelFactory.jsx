import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { ChartFactory } from "./ChartFactory.tsx";
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

const PanelFactory = ({
  charts,
  dataFetcher,    
  data,           
  defaultSize = { width: 200, height: 260 },
  styles = {},
  name
}) => {
  const [internalData, setInternalData] = useState(null);
  const isControlled = !!data;

  useEffect(() => {
    if (!isControlled && dataFetcher) {
      dataFetcher()
        .then((res) => setInternalData(res))
        .catch((err) => console.error(err));
    }
  }, [dataFetcher, isControlled]);

  if (!isControlled && !internalData) return <p>Loading...</p>;

  const stats = isControlled ? data : internalData;

  return (
    <div style={{ ...defaultStyles.container, ...styles.container }}>
      <h2>{name}</h2>

      <div style={{ ...defaultStyles.content, ...styles.content }}>
        {charts.map(({ key, type, title, dataKey, defaultPos, minHeight }) => (
          <Rnd
            key={key}
            default={{
              x: defaultPos.x,
              y: defaultPos.y,
              width: defaultSize.width,
              height: defaultSize.height,
            }}
            bounds="parent"
            minWidth={200}
            minHeight={minHeight}
            style={{ ...defaultStyles.chartContainer, ...styles.chartContainer }}
            lockAspectRatio={true}
            enableResizing={{
              top: false,
              right: true,
              bottom: false,
              left: true,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <ChartFactory
              type={type}
              title={title}
              data={stats[dataKey]}
            />
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default PanelFactory;

const defaultStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "20px",
    maxWidth: "100%",
    gap: "10px",
    borderRadius: "10px",
    position: "relative",
    backgroundColor: "#f9f9f9",
  },
  content: {
    position: "relative",
    width: "100%",
    height: "80vh",
    borderRadius: "8px",
  },
  chartContainer: {
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: 4,
    backgroundColor: "#fff",
    padding: 15,
  },
};