// Entry point for the application
import express from "express";
import morgan from "morgan";
import config from "./config.js";
import apiRouter from "./router.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

// Logging middleware
app.use(morgan("dev"));

app.use(express.json());
app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
