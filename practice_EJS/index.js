
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render(__dirname + "/views/index.ejs");
});

app.post("/calculate" , (req,res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);

    const bmi = (weight / (height * height)).toFixed(2);

    let message = "";

    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi < 25) {
        message = "Normal weight";
    } else if (bmi < 30) {
        message = "Overweight";
    } else {
        message = "Obese";
    }

    res.render("result", { bmi: bmi, message: message });
});

app.listen(port , () => {
    console.log(`Listening on port ${port}.`);
});