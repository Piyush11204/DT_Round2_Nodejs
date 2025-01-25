import express from "express";
import mongoose from "mongoose";
import app from "./app.js"; 

mongoose
	.connect(process.env.DB_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

app.listen(process.env.PORT, () =>
	console.log(`Server running on port ${process.env.PORT}`)
);
