import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./DashBoardChart.css";

const data = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 7000 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 8000 },
    { month: "Jul", sales: 7500 },
    { month: "Aug", sales: 9000 },
    { month: "Sep", sales: 6500 },
    { month: "Oct", sales: 7000 },
    { month: "Nov", sales: 8500 },
    { month: "Dec", sales: 9500 },
];

const DashBoardChart = () => {
    return (
        <div className="chart-container-wrapper">
            <div className="chart-container">
                <h2 className="chart-title">Monthly Sales Chart</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" className="monthsaless" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} className="monthsaless" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashBoardChart;
