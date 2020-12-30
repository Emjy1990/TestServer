const testModels = require('../models/testmodels');

module.exports = class coreController {
    /*
    * path : /
    */
    async empty(req, res) {
        res.send('Hello World plop!')
    }
}