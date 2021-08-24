import express from 'express';
import {
    formPost
} from '../controllers/formController.js';


const router = express.Router();


router.route('/')
    .post(formPost);


    export default router;