const router = require('express').Router();
const apiRoute = require('./api/index');

// localhost:3001/api
router.use('/api', apiRoute);

router.use((req, res) => {
    return res.send('Incorrect route! Try again.');
});

module.exports = router;
