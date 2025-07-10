import {
    Pie,
    Bar,
    Doughnut,
} from "react-chartjs-2";
import * as React from "react";

type ChartType = "pie" | "doughnut" | "bar" | "bar-horizontal";

type Props = {
    type: ChartType;
    title: string;
    data: Record<string, number>;
};

export const ChartFactory = ({ type, title, data }: Props) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: "Count",
                data: Object.values(data),
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
    };

    const options = {
        responsive: true,
        indexAxis: (type === "bar-horizontal" ? "y" : "x") as "x" | "y",
    };

    const renderChart = () => {
        switch (type) {
            case "pie":
                return <Pie data={chartData} />;
            case "doughnut":
                return <Doughnut data={chartData} />;
            case "bar":
            case "bar-horizontal":
                return <Bar data={chartData} options={options} />;
            default:
                return null;
        }
    };


    return (
        <div style={{ marginBottom: "2rem", flex: 1 }}>
            <h3>{title}</h3>
            {renderChart()}
        </div>
    );
};
