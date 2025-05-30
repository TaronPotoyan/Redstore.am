import { Request, Response } from 'express';
import Phone from '../models/Phon';
import { data } from 'react-router-dom';

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
        Processor,
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
        Processor,
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




async function GetSpectial(req: Request, res: Response) {
    try {
        const { _id } = req.params;


        const product = await Phone.findById(_id);

        if (!product) {
            console.log("Product not found:", product);
            return res.status(404).json({ message: 'Ապրանքը չի գտնվել' });
        }

        console.log("Found product:", product);
        res.status(200).json(product);

    } catch (e) {
        console.log(`Error : ${e}`);
        res.status(500).json({ message: 'Ներքին սերվերի սխալ' });
    }
}

export default {
    GetPhons,
    PostPhons,
    GetSpectial
}




