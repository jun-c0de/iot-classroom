// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [led, setLed] = useState("OFF");
    const [peopleCount, setPeopleCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const res = await axios.get("http://192.168.0.218:5000/api/sensor");
                const latest = res.data[0]; // 최신 이벤트

                setTemperature(latest.temperature);
                setHumidity(latest.humidity);
                setLed(latest.led);

                // 누적 peopleCount 계산
                setPeopleCount(prev => {
                    let newCount = prev + (latest.in || 0) - (latest.out || 0);
                    if (newCount < 0) newCount = 0;
                    return newCount;
                });

            } catch (err) {
                console.error("Failed to fetch sensor data", err);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <h2>교실 상태</h2>
            <p>온도: {temperature} °C</p>
            <p>습도: {humidity} %</p>
            <p>LED: {led}</p>
            <p>현재 인원: {peopleCount}</p>
        </div>
    );
};

export default Dashboard;
