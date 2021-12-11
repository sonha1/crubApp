import express from "express";
import dotenv from "dotenv";
import path from "path";
import route from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import exphbs, { engine } from "express-handlebars";
import { connect } from "./config/db/authenDB.js";

dotenv.config();
connect();
const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(__dirname + "/public"));

route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});