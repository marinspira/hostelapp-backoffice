import { useEffect, useState } from "react";
import { fetchLogs } from "../services/api";

const LogsTable = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLogs()
            .then((res) => {
                setLogs(res.data.data);
            })
            .catch((err) => {
                console.error("Failed to fetch logs", err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading logs...</p>;

    if (!logs.length) return <p>No logs available.</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Backend Error Logs</h2>
            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.th}>Timestamp</th>
                        <th style={styles.th}>Type</th>
                        <th style={styles.th}>Route</th>
                        <th style={styles.th}>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={index} style={styles.tr}>
                            <td style={styles.td}>{new Date(log.time).toLocaleString()}</td>
                            <td style={styles.td}>{log.type}</td>
                            <td style={styles.td}>{log.route}</td>
                            <td style={styles.td}>{log.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default LogsTable;

const styles = {
    container: {
        backgroundColor: "#fff",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        margin: "24px",
    },
    title: {
        textAlign: "left",
        marginBottom: "20px",
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#333",
    },
    table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0 10px",
    },
    thead: {
        backgroundColor: "#f5f5f5",
    },
    th: {
        textAlign: "left",
        padding: "12px 16px",
        fontSize: "14px",
        color: "#444",
    },
    td: {
        padding: "12px 16px",
        fontSize: "14px",
        color: "#333",
        backgroundColor: "#fff",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
    },
    tr: {
        borderRadius: "4px",
    },
};