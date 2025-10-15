import React from "react";

const SensorCard = ({ title, children }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
            margin: "8px",
            minWidth: "200px",
            backgroundColor: "#f9f9f9",
        }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default SensorCard;
