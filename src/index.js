import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ running: "true" });
});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});