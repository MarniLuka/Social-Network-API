const { Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId})

            if (!thought) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    // Create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body)

            if (!thought) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('Thought has been updated.')
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('Thought has been deleted.');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Add a reaction
    async newReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a reaction
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('You deleted a reaction.');
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};