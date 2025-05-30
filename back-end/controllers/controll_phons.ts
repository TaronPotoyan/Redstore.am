import { Request, Response } from 'express';
import service_phon from '../services/phon';

const getPhonesController = async (req: Request, res: Response): Promise<void> => {
    await service_phon.GetPhons(req, res);
}

const postPhonesController = async (req: Request , res : Response) : Promise<void> => {
    await service_phon.PostPhons(req,res);
}

const getPhon = async (req : Request , res : Response) : Promise <void> => {
    await service_phon.GetSpectial(req, res);
}


export default {
  getPhonesController,
  postPhonesController,
  getPhon,
}