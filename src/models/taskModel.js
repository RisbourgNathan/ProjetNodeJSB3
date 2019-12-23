let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

export const TaskSchema = new Schema({
    id:{
        type: Number,
        required: 'Id required'
    },
    name: {
        type: String,
        required: 'Name required'
    },
    desc: {
        type: String,
        required: 'Description required'
    },
    start: {
        type: Date,
        required: 'Starting date required',
        default: Date.now()
    },
    end: {
        type: Date,
        required: 'Ending date required',
        default: Date.now()
    },
    percentageProgress: {
        type: Number,
        required: 'Progress percentage required'
    },
    color: {
        type: String,
        required: 'Color required'
    },
    linkedTasks: [{
        type: ObjectId,
        ref: 'Task',
        autopopulate: true
    }],
    resources: [{
        type: ObjectId,
        ref: 'Resource',
        autopopulate: true
    }]
});
TaskSchema.plugin(require('mongoose-autopopulate'));