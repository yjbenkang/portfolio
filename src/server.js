import express from "express";
import morgan from "morgan";
import { aboutController, contactController, homeController, projectsController, skillsController } from "./pfController";
const PORT = 5000;
const app = express();
const logger = morgan("dev");
app.use(logger);
app.get("/", homeController);
app.get("/about", aboutController);
app.get("/skills", skillsController );
app.get("/projects", projectsController);
app.get("/contact", contactController);


const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);