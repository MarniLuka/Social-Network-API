const { Schema, model } = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // getter method to format the timestamp on query
    }
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema] 
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
});

const Thought = model ('thought', thoughtSchema)

module.exports = Thought;