import  Client from '../models/Client';
import { Request,Response } from 'express';




async function get(req : Request,res : Response) {
    try {
        const {name , password} = req.body;
        const user = Client.findOne({name,password});
        if (!user) {
            res.status(404).json({message : 'User not found'});
            return;
        }
        res.status(200).json({
            user : user
        })

    }catch(e) {
        res.status(500).json({message : 'Server error'})
        console.error(e)
    }   

}


export default {
    get,
}


