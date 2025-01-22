import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/gg", (req, res) => {
  console.log("Route /gg accessed");
  res.send("Hello from API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
