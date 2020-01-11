import mongoose from 'mongoose';

import { ServiceSchema } from "../models/serviceModel";

const Service = mongoose.model('Service', ServiceSchema);

export const listServicesPromise = new Promise((resolve, reject) => {
    Service.find({}, '-_id -__v')
    .exec((err, services) => {
        if(err) {
            reject(err);
        } else {
            if(services[0] != undefined)
            {
                resolve(services[0].toObject());
            }
            else {
                console.log('There is no service yet, create one');
            } 
        }
    });
});