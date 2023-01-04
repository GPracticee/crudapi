const express = require("express");
const app = express()
require("./db/db")
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})

PORT = process.env.PORT

app.use(express.json())

app.use(require("./routes/userRoutes"))

app.get('/about',(req,res)=>{
    res.cookie("test","gautam")
    res.send("hello aouu")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})