import express from "express";
import { logger } from "logger-express";
import cors from "cors";
import { PORT } from "../DB/config.js";
import { router } from "../routes/postRoutes.js";

const app = express();

//middlewares
app.use(cors());
app.use(logger());
app.use(express.json());
app.use(router);


// revisar estro

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message + "...and something bad happened",
  });
});


app.listen(PORT, (error) => {
  if (error) {
    console.log("crash!!! ☠ ☠", error)
  } else {
    console.log(`👾 http://localhost:${PORT} 👾`);
  }
});
