const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    newFriend,
    deleteFriend
} = require ('../../controllers/userController');

// localhost:3001/api/users
router.route('/')
    .get(getUser)
    .post(createUser);

// localhost:3001/api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// localhost:3001/api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(newFriend)
    .delete(deleteFriend)

module.exports = router;