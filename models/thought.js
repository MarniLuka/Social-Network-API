const { Schema, model } = require('mongoose');

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
                // need to create reacitonSchema
})