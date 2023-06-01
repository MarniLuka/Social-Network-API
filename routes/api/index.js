const router = require('express').Router();
const userRoute = require('./userRoute');
const thoughtRoute = require('./thoughtRoute');

// localhost:3001/api/users
router.use('/users', userRoute);
// localhost:3001/api/thoughts
router.use('/thoughts', thoughtRoute);

module.exports = router;