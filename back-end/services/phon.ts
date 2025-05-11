import { Request, Response } from 'express';
import Phone from '../models/Phon';

async function GetPhons(req: Request, res: Response): Promise<void> {

  try {
    const products = await Phone.find();

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    console.error('Error fetching phones:', error);

    res.status(500).json({
      success: false,
      message: 'Server error. Failed to fetch phones.',
    });
  }
}

async function PostPhons(req: Request, res: Response): Promise<void> {
    try {
      const {
        img,
        cost,
        date,
        count,
        brand,
        model,
        RAM,
        SSD,
        Proccessor,
        CameraFront,
        CameraBack
      } = req.body;
  
      const new_phon = {
        img,
        cost,
        brand,
        model,
        RAM,
        SSD,
        Proccessor,
        CameraFront,
        CameraBack,
        count,
        productionDate: new Date(date), 
        likeCount: 0,
        dislikeCount: 0
      };
      console.table(new_phon);
      const phon = new Phone(new_phon);
      await phon.save();
  
      res.status(201).json({
        success: true,
        message: 'Phone created successfully',
        data: phon
      });
  
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Cannot create phone' });
    }
}

export default {
    GetPhons,
    PostPhons,
}
