// const express = require('express');
import express from 'express';

import formPost from '../controllers/formController.mjs';


const router = express.Router();


router.route('/')
    .post(formPost);


// module.exports = router;
export default router;