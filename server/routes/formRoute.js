const express = require('express');

const formPost = require('../controllers/formController.js');


const router = express.Router();


router.route('/')
    .post(formPost);


module.exports = router;