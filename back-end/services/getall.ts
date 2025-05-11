import { Request, Response } from 'express';
import Phone from '../models/Phon';



async function GetAll(req : Request , res : Response) : Promise<void> {
        try {
            const products = [... await Phone.find()];
            res.status(200).json(products);
        }catch(e) {
            console.error(e);
            res.send(500).json({massage : 'Can not get resourses'});
        }    
}


export default {
    GetAll,
}