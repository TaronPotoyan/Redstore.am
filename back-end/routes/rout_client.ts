import express from 'express';
import client from '../controllers/controll_client';

const rout_client = express.Router();

rout_client.get('/',client.Get_Client);

export default rout_client;
