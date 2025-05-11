import Get_All from '../services/getall';
import { Request , Response } from 'express';

const GetAllProducts = async (req : Request ,res : Response) : Promise<void>  => {
    await Get_All.GetAll(req,res);

}

export default GetAllProducts;
