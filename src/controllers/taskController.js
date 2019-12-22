let mongoose = require('mongoose');

import { TaskSchema } from "../models/taskModel";

const Task = mongoose.model('Task', TaskSchema);

export const createTask = (req, res) => {
    let newTask = new Task(req.body);
    console.log(req.body);

    newTask.save((err, task) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(201).json(task);
        }
    })
};

export const listTasks = (req, res) => {
    Task.find({}, (err, tasks) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(tasks)
        }
    })
};

export const getTask = (req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(task);
        }
    })
};

export const updateTask = (req, res) => {
    Task.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true, useFindAndModify: false}, (err, task) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(task == null) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json(task);
            }
        }
    })
};

export const deleteTask = (req, res) => {
    Task.findOneAndDelete({"_id": req.params.id}, (err, task) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(task == null) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(204);
            }
        }
    })
};