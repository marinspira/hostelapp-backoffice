import { Line, Pie } from "react-chartjs-2";
import { fetchHostelStats, fetchUserStats } from "../services/api";
import { useEffect, useState } from "react";

const UserStatsCharts = () => {
    const [stats, setStats] = useState(null);
    const [userStats, setUserStats] = useState(null);

    useEffect(() => {
        fetchHostelStats()
            .then((res) => setStats(res.data.data))
            .catch(console.error);

        fetchUserStats()
            .then((res) => setUserStats(res.data.data))
            .catch(console.error);
    }, []);

    const makePieData = (obj) => ({
        labels: Object.keys(obj),
        datasets: [
            {
                data: Object.values(obj),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"
                ],
                hoverBackgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"
                ],
            },
        ],
    });

    if (!userStats) return <p>Loading user stats...</p>;

    return (
        <>
            {userStats && (
                <div style={{ marginTop: "3rem" }}>
                    <h2>User Statistics</h2>

                    <div style={{ maxWidth: 500 }}>
                        <Pie
                            data={makePieData(userStats.usersByRole)}
                            options={{ plugins: { title: { display: true, text: "Users by Role" } } }}
                        />
                    </div>

                    <p style={{ marginTop: "1rem" }}>
                        Total Users: {userStats.totalUsers}
                    </p>
                    <p>New Users This Month: {userStats.newUsersThisMonth}</p>
                </div>
            )}
        </>
    )
}

export default UserStatsCharts