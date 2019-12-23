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
            type: Date,
            default: Date.now()
        },
        end: {
            type: Date,
            default: Date.now()
        }
    },
    task:[{
        type: ObjectId,
        ref: 'Task',
        autopopulate: true
    }],
    groupTask: [{
        name: String,
        start: {
            type: Date,
            default: Date.now()
        },
        end: {
            type: Date,
            default: Date.now()
        }
    }],
    resources:[{
        type: ObjectId,
        ref: 'Resource',
        autopopulate: true
    }],
    milestones:[{
        name: String,
        date: {
            type: Date,
            default: Date.now()
        }
    }]
});
ProjectSchema.plugin(require('mongoose-autopopulate'));