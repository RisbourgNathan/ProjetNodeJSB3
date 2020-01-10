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
        type: Number,
        required: 'Starting date required',
        default: Date.now()
    },
    end: {
        type: Number,
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
    linkedTask: [{
        type: ObjectId,
        ref: 'Task',
        autopopulate: true
    }],
    ressources: [{
        type: ObjectId,
        ref: 'Resource',
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
TaskSchema.plugin(require('mongoose-autopopulate'));