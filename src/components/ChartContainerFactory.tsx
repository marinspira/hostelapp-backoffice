import React from "react";

interface ChartContainerFactoryProps {
    children: React.ReactNode[];
}

const ChartContainerFactory: React.FC<ChartContainerFactoryProps> = ({ children }) => {
    const charts = React.Children.toArray(children);


    const renderLayout = () => {
        switch (charts.length) {
            case 1:
                return (
                    <div style={styles.fullWidth}>
                        {charts[0]}
                    </div>
                );

            case 2:
                return (
                    <div style={styles.row}>
                        <div style={styles.half}>{charts[0]}</div>
                        <div style={styles.half}>{charts[1]}</div>
                    </div>
                );

            case 3:
                return (
                    <div style={styles.row}>
                        <div style={styles.half}>{charts[0]}</div>
                        <div style={styles.column}>
                            <div style={styles.half}>{charts[1]}</div>
                            <div style={styles.half}>{charts[2]}</div>
                        </div>
                    </div>
                );

            default:
                return <p>Please pass 1 to 3 charts</p>;
        }
    };

    return (
        <div style={{ padding: "2rem", width: "50%" }}>
            {renderLayout()}
        </div>
    );
};

const styles = {
    row: {
        display: "flex",
        flexDirection: "row" as const,
        gap: "1rem",
        flexWrap: "wrap" as const,
    },
    column: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "1rem",
        flex: 1,
    },
    fullWidth: {
        width: "100%",
        maxWidth: "400px"
    },
    half: {
        flex: 1,
        width: "50%",
        minWidth: "300px"
    },
    largeRight: {
        flex: 2,
        minWidth: "400px",
    },
};

export default ChartContainerFactory;
