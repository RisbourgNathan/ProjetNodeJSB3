import mongoose from 'mongoose';

import { MilestonesSchema } from "../models/milestonesModel";

const Milestones = mongoose.model('Milestones', MilestonesSchema);

export const createMilestones = (req, res) => {
    let newMilestones = new Milestones(req.body);

    newMilestones.save((err, milestones) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(201).json(milestones);
        }
    })
};

export const listMilestoness = (req, res) => {
    Milestones.find({})
    .exec((err, milestoness) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(milestoness)
        }
    });
};

export const getMilestones = (req, res) => {
    Milestones.findById(req.params.id)
    .exec((err, milestones) => {
        if(err) {
            res.status(400).send(err);
        } else if(milestones == null) {
            res.sendStatus(404)
        } else {
            res.status(200).json(milestones)
        }
    });
};

export const updateMilestones = (req, res) => {
    Milestones.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true, useFindAndModify: false})
    .exec((err, milestones) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(milestones == null) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json(milestones);
            }
        }
    });
};

export const deleteMilestones = (req, res) => {
    Milestones.findOneAndDelete({"_id": req.params.id}, (err, milestones) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(milestones == null) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(204);
            }
        }
    });
};