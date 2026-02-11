import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const API_KEY = "api-key";

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/weather", async (req, res) => {
    const city = req.body.city;

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await axios.get(url);

        const data = response.data;

        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind: data.wind.speed
        };

        res.render("result", { weather: weatherData });

    } catch (error) {
        res.render("result", { weather: null });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
