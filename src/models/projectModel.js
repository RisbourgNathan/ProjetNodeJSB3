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
        type: ObjectId,
        ref: 'GroupTask',
        autopopulate: true
    }],
    resources:[{
        type: ObjectId,
        ref: 'Resource',
        autopopulate: true
    }],
    milestones:[{
        type: ObjectId,
        ref: 'Milestones',
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
ProjectSchema.plugin(require('mongoose-autopopulate'));