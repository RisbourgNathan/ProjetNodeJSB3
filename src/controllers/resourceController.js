import mongoose from 'mongoose';

import { ResourceSchema } from "../models/resourceModel";

const Resource = mongoose.model('Resource', ResourceSchema);

export const createResource = (req, res) => {
    let newResource = new Resource(req.body);
    
    newResource.save((err, resource) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(201).json(resource);
        }
    });
};

export const listResources = (req, res) => {
    Resource.find({}, (err, resources) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(resources)
        }
    })
};

export const getResource = (req, res) => {
    Resource.findById(req.params.id, (err, resource) => {
        if(err) {
            res.status(400).send(err);
        } else if(resource == null) {
            res.sendStatus(404)
        } else {
            res.status(200).json(resource)
        }
    });
};

export const updateResource = (req, res) => {
    Resource.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true, useFindAndModify: false}, (err, resource) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(resource == null) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json(resource);
            }
        }
    })
};

export const deleteResource = (req, res) => {
    Resource.findOneAndDelete({"_id": req.params.id}, (err, resource) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(resource == null) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(204);
            }
        }
    })
};