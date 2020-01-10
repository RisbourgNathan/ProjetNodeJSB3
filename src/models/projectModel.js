import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

export const ProjectSchema = new Schema({
    name: {
        type: String,
        required: 'Name required',
    },
    desc: {
        type: String,
        required: 'Description required'
    },
    daysOff: {
        Mo: Boolean,
        Tu: Boolean,
        We: Boolean,
        Th: Boolean,
        Fr: Boolean,
        Sa: Boolean,
        Su: Boolean,
    },
    workingHours: {
        start: {
            type: Number,
            default: Date.now()
        },
        end: {
            type: Number,
            default: Date.now()
        }
    },
    task:[{
        type: ObjectId,
        ref: 'Task',
        autopopulate: true
    }],
    groupTask: [{
        _id: false,
        name: String,
        start: {
            type: Number,
            default: Date.now()
        },
        end: {
            type: Number,
            default: Date.now()
        }
    }],
    resources:[{
        type: ObjectId,
        ref: 'Resource',
        autopopulate: true
    }],
    milestones:[{
        _id: false,
        name: String,
        date: {
            type: Number,
            default: Date.now(),
        }
    }]
}, {
    toObject: {
      transform: function (doc, ret, game) {
        delete ret.__v;
        delete ret._id;
      }
    }
});
ProjectSchema.plugin(require('mongoose-autopopulate'));