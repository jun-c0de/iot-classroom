import React from "react";
import SensorCard from "./sensorCard";

const LEDStatus = ({ led }) => {
    return (
        <SensorCard title="LED Status">
            <p style={{ color: led === "ON" ? "green" : "red" }}>{led}</p>
        </SensorCard>
    );
};

export default LEDStatus;
