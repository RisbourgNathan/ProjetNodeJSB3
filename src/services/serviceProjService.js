import mongoose from 'mongoose';

import { ServiceSchema } from "../models/serviceModel";

const Service = mongoose.model('Service', ServiceSchema);

export const listServicesPromise = new Promise((resolve, reject) => {
    Service.find({}, '-_id -__v')
    .exec((err, services) => {
        if(err) {
            reject(err);
        } else {
            console.log("Return services");
            resolve(services[0].toObject());
        }
    });
});