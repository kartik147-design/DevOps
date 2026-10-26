const express = require("express");
const app = express();

app.use(express.json());


app.get("/health-check", (req,res) => {
    res.json({
        message: "Working fine!"
    })
})

app.listen(3000, () => {
    console.log("Running on Port 3000");
})