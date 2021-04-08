import express from 'express';
import { getPlants, postPlants } from '../controller/plants.controller.js'


const router = express.Router();


router.get('/plants', getPlants);

router.post('/plants', postPlants);


export default router;