const jwt = require("jsonwebtoken")
const userSchema = require("../routes/userRoutes")
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})

const userMiddleware = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = await userSchema.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error("user not found")
        }else{
        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id
        }
        next()

    } catch (err) {
        res.status(401).send("unauthorized token")
        console.log(err);
    }
}

module.exports = userMiddleware;