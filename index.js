import express from 'express';
let app = require('express')();
let http = require('http').createServer(app);
export let io = require('socket.io')(http, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }});

import mongoose from 'mongoose';

import { taskRoutes } from "./src/routes/taskRoutes.js";
import { resourceRoutes } from "./src/routes/resourceRoutes";
import { projectRoutes } from "./src/routes/ProjectRoutes";
import { serviceRoutes } from "./src/routes/serviceRoutes";

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NodeJSDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(error) {
        console.log(error);
        process.exit(1);       
    }
});

// Routes initialisation
taskRoutes(app);
resourceRoutes(app);
projectRoutes(app);
serviceRoutes(app);

io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} connected`);

    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    });

    socket.on('message', (data) => {
        console.log(data);
    });
});

http.listen(PORT, 
    console.log(`listening on port ${PORT}`)
);