const express = require("express");
const router = express.Router();
const {SignupAuth , LoginAuth} = require("../controllers/auth");




router.get("/",(req,res) => {
    res.status(200).send("Route Avialable!!");
});

router.post("/signup",SignupAuth);
router.post("/login",LoginAuth);


module.exports = router;