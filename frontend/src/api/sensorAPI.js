import axios from "axios";

const BASE_URL = "http://192.168.0.218:5000/api/sensor";

export const fetchSensorData = async () => {
    try {
        const res = await axios.get(BASE_URL);
        return res.data; // 배열 형태로 최근 50개 데이터
    } catch (err) {
        console.error("Failed to fetch sensor data", err);
        return [];
    }
};
