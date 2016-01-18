var express = require('express'),
    main    = require('../controllers/main'),
    router  = express.Router();

router.route('/').get(main);

module.exports = router;
