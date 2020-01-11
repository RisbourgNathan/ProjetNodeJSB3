import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GroupTaskSchema = new Schema({
    name: {
        type: String,
        required: 'GroupTask name requiered'
    },
    start: {
        type: Number,
        required: 'starting date requiered',
        default: Date.now()
    },
    end: {
        type: Number,
        required: 'ending date requiered',
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