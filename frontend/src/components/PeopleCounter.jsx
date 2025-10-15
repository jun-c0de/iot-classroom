import React from "react";
import SensorCard from "./sensorCard";

const PeopleCounter = ({ peopleCount, peopleIn, peopleOut }) => {
    return (
        <SensorCard title="People">
            <p>Total: {peopleCount}</p>
            <p>In: {peopleIn} | Out: {peopleOut}</p>
        </SensorCard>
    );
};

export default PeopleCounter;
