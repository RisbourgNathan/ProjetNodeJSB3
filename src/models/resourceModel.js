import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ResourceSchema = new Schema({
    name: {
        type: String,
        required: 'Name required'
    },
    cost: {
        type: Number,
        required: 'Cost required'
    },
    type: {
        type: String,
        required: 'Resource type required'
    }
}, {
    toObject: {
      transform: function (doc, ret, game) {
        delete ret.__v;
        delete ret._id;
      }
    }
});