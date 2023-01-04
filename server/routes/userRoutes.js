const { response } = require("express");
const express = require("express");
require("../db/db")
const userSchema = require("../model/userSchema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/userMiddleware");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("welcome home")
})

// register code

router.post("/register", async (req, res) => {

    const { name, email, phone, password, work, cpassword } = req.body;

    if (!name || !email || !password || !phone || !work || !cpassword) {
        return res.status(422).json({ error: "please fielled the firld property" })
    }
    try {
        const response = await userSchema.findOne({ email: email })
        if (response) {
            return res.status(422).json({ error: "email already exist" })
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password not matched" })
        } else {
            const user = new userSchema({ name, email, phone, password, work, cpassword });
            //hash password
            await user.save()
            res.status(201).json({ message: "user register successfully" })
        }

    } catch (err) {
        console.log(err)
    }
});


router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please field data" })

        }
        const data = await userSchema.findOne({ email: email })
        if (data) {
            const isMatch = await bcrypt.compare(password, data.password)
            const Token = await data.generatAuthToken();
            console.log(Token);
            res.cookie("jwtoken",Token,{
                expires:new Date(Date.now() + 258920000),
                httpOnly:true
            })

            if (!isMatch) {
                res.status(400).json({ error: "invalid credintials" })
            } else {
                res.status(400).json({ message: "user signin successfully" })
            }
        } else {
            res.status(400).json({ error: "invalid credintials" })
        }

    } catch (err) {
        console.log(err);
    }
})

router.get('/about',userMiddleware,(req,res)=>{
    console.log("hello");
    res.send(req.rootUser)
})




module.exports = router;