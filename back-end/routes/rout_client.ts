import express from 'express';
import client from '../controllers/controll_client';
import validateLogin from '../middlewares/validation';


const rout_client = express.Router();

rout_client.get('/',client.Get_Client);
rout_client.post('/', validateLogin ,  client.CreateCLient);
rout_client.put('/reset',client.ResetPAssword);

export default rout_client;
