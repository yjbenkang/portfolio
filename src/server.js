import express from "express";
import morgan from "morgan";
import { indexController } from "./controller";
const PORT = process.env.PORT || 5000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("assets"));


app.use("/img", express.static("img"));
app.get("/", indexController);


const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);