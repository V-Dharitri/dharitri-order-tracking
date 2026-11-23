import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Dharitri Order Tracking API is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
