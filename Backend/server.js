const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.json({
        message: "Working fine!"
    })
})

app.listen(3000, () => {
    console.log("Running on Port 3000");
})