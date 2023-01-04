const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})
// const DB = process.env.DATABASE_URL;

mongoose.connect("mongodb+srv://puru:DL2290N3VbJu1iap@cluster0.6vd9ova.mongodb.net/crudapi?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfull");
}).catch((err) => console.log("no connection"))


