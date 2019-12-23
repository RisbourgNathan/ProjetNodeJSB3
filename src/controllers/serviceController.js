import mongoose from 'mongoose';

import { ServiceSchema } from "../models/serviceModel";

const Service = mongoose.model('Service', ServiceSchema);

export const createService = (req, res) => {
    let newService = new Service(req.body);

    newService.save((err, service) => {
        if(err) {
            res.status(400).send(err);
        } else {
            const opts = [{path: 'projects'}];

            let promise = Service.populate(service, opts);
            promise.then((data) => {res.status(201).json(data)});
        }
    })
};

export const listServices = (req, res) => {
    Service.find({})
    .populate({
        path: 'projects',
        populate: {path: 'task', populate:{path: 'linkedTasks'}}
    })
    .exec((err, services) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(services)
        }
    });
};

export const getService = (req, res) => {
    Service.findById(req.params.id)
    .populate({
        path: 'projects',
        populate: {path: 'task', populate:{path: 'linkedTasks'}}
    })
    .exec((err, service) => {
        if(err) {
            res.status(400).send(err);
        } else if(service == null) {
            res.sendStatus(404)
        } else {
            res.status(200).json(service)
        }
    });
};

export const updateService = (req, res) => {
    Service.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true, useFindAndModify: false})
    .populate({
        path: 'projects',
        populate: {path: 'task', populate:{path: 'linkedTasks'}}
    })
    .exec((err, service) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(service == null) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json(service);
            }
        }
    });
};

export const deleteService = (req, res) => {
    Service.findOneAndDelete({"_id": req.params.id}, (err, service) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(service == null) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(204);
            }
        }
    });
};