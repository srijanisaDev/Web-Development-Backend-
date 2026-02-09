import express from "express";
const app = express();
const port = 3001;

app.get("/",(req,res) => {
    res.send("<h1>Hello Srijan!!</h1>");
})

app.get("/about", (req, res) => {
    res.send(`
        <h3>About Me</h3>
        <h5>
            <p>Hello I am Srijan and I am currently learning HTTP requests!!</p>
        </h5>
    `);
});

app.get("/contact",(req,res) => {
    res.send("<h1>+17232214</h1>");
})

app.listen(port , () => {
    console.log(`server is running at ${port}`);
})


