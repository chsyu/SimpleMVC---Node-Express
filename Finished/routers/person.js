var express = require('express'),
    person  = require('../controllers/person'),
    router = express.Router();

router.route('/:id').get(person);

module.exports = router;
