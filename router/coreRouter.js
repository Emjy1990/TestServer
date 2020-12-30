const CoreController = require( './../controllers/coreController' )
const coreController = new CoreController()

var express = require( 'express' ),
    router = express.Router()


/*
* Declare routes
*/
router
    .get('/', async (req, res) => {
        coreController.empty(req, res)
    })

      
module.exports = router