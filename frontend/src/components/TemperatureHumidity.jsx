import React from "react";
import SensorCard from "./sensorCard";

const TemperatureHumidity = ({ temperature, humidity }) => {
    return (
        <SensorCard title="Temperature & Humidity">
            <p>Temperature: {temperature}°C</p>
            <p>Humidity: {humidity}%</p>
        </SensorCard>
    );
};

export default TemperatureHumidity;
