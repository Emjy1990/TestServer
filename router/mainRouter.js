var express = require( 'express' ),
    router = express.Router()

/*
* Handle module routes
*/
var coreRouter = require( './coreRouter' )

/*
* Declare routes
*/
router
    .use( '/', coreRouter )

module.exports = router