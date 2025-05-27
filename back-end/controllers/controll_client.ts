import { Request,Response } from "express";
import client_obj from '../services/getclient';


async function  Get_Client(req : Request, res : Response) {
        await client_obj.get(req,res);
}


export default {
    Get_Client,
}