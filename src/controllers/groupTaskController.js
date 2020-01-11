import mongoose from 'mongoose';

import { GroupTaskSchema } from "../models/groupTaskModel";

const GroupTask = mongoose.model('GroupTask', GroupTaskSchema);

export const createGroupTask = (req, res) => {
    let newGroupTask = new GroupTask(req.body);

    newGroupTask.save((err, groupTask) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(201).json(groupTask);
        }
    })
};

export const listGroupTasks = (req, res) => {
    GroupTask.find({})
    .exec((err, groupTasks) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(groupTasks)
        }
    });
};

export const getGroupTask = (req, res) => {
    GroupTask.findById(req.params.id)
    .exec((err, groupTask) => {
        if(err) {
            res.status(400).send(err);
        } else if(groupTask == null) {
            res.sendStatus(404)
        } else {
            res.status(200).json(groupTask)
        }
    });
};

export const updateGroupTask = (req, res) => {
    GroupTask.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true, useFindAndModify: false})
    .exec((err, groupTask) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(groupTask == null) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json(groupTask);
            }
        }
    });
};

export const deleteGroupTask = (req, res) => {
    GroupTask.findOneAndDelete({"_id": req.params.id}, (err, groupTask) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(groupTask == null) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(204);
            }
        }
    });
};