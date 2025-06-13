import { Request,Response } from "express";
import client_obj from '../services/client';


async function  Get_Client(req : Request, res : Response) {
        await client_obj.get(req,res);
}

async function  CreateCLient(req : Request , res : Response) {
        await client_obj.post(req,res);
}

async function ResetPAssword(req : Request,res : Response) {
       await client_obj.newPassword(req,res);         
}

export default {
    Get_Client,
    CreateCLient,
    ResetPAssword
}