import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.router.js";
import hotelRouter from "./routes/hotel.router.js"; 

dotenv.config();

const app = express();


const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Something broke!",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
});

export default app;
