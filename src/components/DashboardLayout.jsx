import React, { useState } from "react";

const DashboardLayout = ({ contentMap, items }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("hostels");

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.sidebar,
                    width: isSidebarOpen ? 200 : 60,
                }}
                onMouseEnter={() => setIsSidebarOpen(true)}
                onMouseLeave={() => setIsSidebarOpen(false)}
            >
                {items.map((item) => (
                    <div
                        key={item.key}
                        onClick={() => setActiveKey(item.key)}
                        style={{
                            ...styles.sidebarItem,
                            backgroundColor: activeKey === item.key ? "#334155" : "transparent",
                        }}
                    >
                        {isSidebarOpen ? item.label : item.label.charAt(0)}
                    </div>
                ))}
            </div>

            <div style={styles.content}>
                {contentMap[activeKey]}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        height: "100vh",
        width: "100vw",
        fontFamily: "sans-serif",
    },
    sidebar: {
        backgroundColor: "#1e293b",
        color: "#fff",
        transition: "width 0.3s",
        overflow: "hidden",
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    sidebarItem: {
        padding: "12px 20px",
        cursor: "pointer",
        width: "100%",
        whiteSpace: "nowrap",
        transition: "background 0.2s",
    },
    content: {
        flex: 1,
        padding: 30,
        backgroundColor: "#f1f5f9",
    },
};

export default DashboardLayout;