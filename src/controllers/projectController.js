import mongoose from 'mongoose';

import { ProjectSchema } from '../models/projectModel';

const Project = mongoose.model('Project', ProjectSchema);

export const createProject = (req, res) => {
    let newProject = new Project(req.body);
    
    newProject.save((err, project) => {
        if(err) {
            res.status(400).send(err);
        } else {
            const opts = [{path: 'task', populate: [{path: 'linkedTask'}, {path: 'resources'}]}, {path: 'resources'}];

            let promise = Project.populate(project, opts);
            promise.then((data) => {res.status(201).json(data)});
        }
    });
};

export const listProjects = (req, res) => {
    Project.find({}, '-_id -__v')
    .exec((err, projects) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(projects)
        }
    });
};

export const getProject = (req, res) => {
    Project.findById(req.params.id, '-_id -__v')
    .exec((err, project) => {
        if(err) {
            res.status(400).send(err);
        } else if(project == null) {
            res.sendStatus(404)
        } else {
            res.status(200).json(project)
        }
    });
};

export const updateProject = (req, res) => {
    Project.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true, useFindAndModify: false})
    .exec((err, project) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(project == null) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json(project);
            }
        }
    });
};

export const deleteProject = (req, res) => {
    Project.findOneAndDelete({"_id": req.params.id}, (err, project) => {
        if(err) {
            res.status(400).send(err);
        } else {
            if(project == null) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(204);
            }
        }
    })
};