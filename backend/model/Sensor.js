import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    led: String,
    in: Number,
    out: Number,
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Sensor", sensorSchema);
