const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 4000; 
const cors  = require("cors");
const authRouter = require("./routers/auth");
const todoRouter = require("./routers/todo");
app.use(cors({
    origin:"http://localhost:3000"
}));

const logStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a', });
const errorStream = fs.createWriteStream(path.join(__dirname, "error.txt"), { flags: 'a', });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const log = `${req.method} ${req.originalUrl} ${time}`;
    logStream.write(log + '\n');
    next();
});


app.use("/api/auth", authRouter);
app.use("/api/todo",todoRouter);


app.use((req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const error = `${req.method} ${req.originalUrl} ${time}`;
    errorStream.write(error + '\n');
    res.status(404).send("Route not found !");
});


app.use((err, req, res, next) => {
        const now = new Date();
        const time = `${now.toLocaleTimeString()}`;
        const error = `${req.method} ${req.originalUrl} ${time}`;
        errorStream.write(error + err.stack + '\n');
        res.status(500).send("Internal Sever Error");
    });

    app.get("/", (req, res) => {
        res.status(200).send("Welcome to new World..");
    });




    app.listen(port, () => {
        mongoose.connect("mongodb+srv://Manage_data:data08@cluster0.vqlwp77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
            .then(() => {
                console.log(`Server is running with DB on ${port}`);
            }).catch((error) => {
                console.log(error);
            })
    });