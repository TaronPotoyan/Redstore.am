import express from 'express'; 
import GetAllProducts from '../controllers/controll_getall';

const rout_all = express.Router();

rout_all.get('/',GetAllProducts);

export default rout_all;