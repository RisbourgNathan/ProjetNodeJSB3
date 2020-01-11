import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MilestonesSchema = new Schema({
    name: {
        type: String,
        required: 'Milestones name requiered'
    },
    date: {
        type: Number,
        required: 'date requiered',
        default: Date.now()
    }
}, {
    toObject: {
      transform: function (doc, ret, game) {
        delete ret.__v;
        delete ret._id;
      }
    }
});