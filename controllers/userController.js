const { User } = require('../models');

model.exports = {
    // Get all users
    async getUser (req, res) {
        try {
            const user = await User.find();
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single user by its id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})

            if (!user) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body)

            if (!user) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('User has been updated.')
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('User has been deleted.');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Add a new friend
    async newFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('You made a new friend.');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a friend
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'Invalid ID' });
            }

            res.json('You lost a friend.');
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};