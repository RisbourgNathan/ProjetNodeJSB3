import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

export const ServiceSchema = new Schema({
    nameService: {
        type: String,
        required: 'Service name requiered'
    },
    projects:[{
        type: ObjectId,
        ref: 'Project',
        autopopulate: true
    }]
}, {
    toObject: {
      transform: function (doc, ret, game) {
        delete ret.__v;
        delete ret._id;
      }
    }
});
ServiceSchema.plugin(require('mongoose-autopopulate'));