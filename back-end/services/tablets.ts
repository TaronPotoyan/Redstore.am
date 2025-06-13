import type { Request,Response } from "express";
import Product from "@models/product";

async function getTablets(req : Request , res : Response) {
        try {   
            const tablets = await Product.find({type : 'tablet'});
            if (!tablets) {
                res.status(404);
                return
            }
            res.status(200).json(tablets);
        }catch (e) {
            console.log(`Error : ${e}`);
            res.status(500).json({message : 'Server error'});
        }
}