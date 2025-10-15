import express from "express";
import Sensor from "../model/Sensor.js";

const router = express.Router();

// POST /api/sensor
router.post("/", async (req, res) => {
    try {
        const { temperature, humidity, led, in: peopleIn, out: peopleOut } = req.body;

        // 유효성 체크
        if (
            temperature === undefined ||
            humidity === undefined ||
            led === undefined ||
            peopleIn === undefined ||
            peopleOut === undefined
        ) {
            return res.status(400).json({ success: false, error: "Missing fields" });
        }

        const data = new Sensor({
            temperature,
            humidity,
            led,
            in: peopleIn,
            out: peopleOut
        });
        await data.save();

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET /api/sensor
router.get("/", async (req, res) => {
    try {
        const data = await Sensor.find().sort({ timestamp: -1 }).limit(50);
        res.json(data);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

export default router;
