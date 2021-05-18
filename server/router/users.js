const express = require('express');
const router =  express.Router();
const {saveData , getData,removeData} = require('../controller/data');

 router.route('/save').post(saveData);
router.route('/getData').get(getData);
router.route('/delete').post(removeData);

module.exports = router;