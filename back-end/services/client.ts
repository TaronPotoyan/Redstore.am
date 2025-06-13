import Client from '../models/User';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import utility from '../utils/key_generator';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;



const SALT_ROUNDS = 10;

async function get(req: Request, res: Response) {
  try {
    const { name, password } = req.body;

    const user = await Client.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}



async function post(req: Request, res: Response) {
  try {
    const { name, password, email } = req.body;

    const existingUser = await Client.findOne({ 
      $or: [
        { name },
        { email }
      ]
    });
  
    
    if (existingUser) {
      if (existingUser.name === name) {

        return res.status(409).json({ message: 'User already exists' });
      }
      if (existingUser.email === email) {
        return res.status(409).json({ message: 'Email already registered' });
      }
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new Client({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ 
      message: 'User created successfully', 
      user: { 
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (e) {
    console.error(`Error: ${e}`);
    res.status(500).json({ message: 'Cannot create user' });
  }
}

async function newPassword(req: Request, res: Response) {
  try {
    const { name, email } = req.body;

    const user = await Client.findOne({ name, email });

    if (!user) {
      return res.status(404).json({ message: 'Օգտվողը չի գտնվել' });
    }

    const key = utility.generateKey();
    user.reset_id = key
    setTimeout (async ()=> {
      user.reset_id = '';
      await user.save();
    })

    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'Redstore.am',
      to: email,
      subject: 'Գաղտնաբառի վերականգնում',
      text: `Ձեր գաղտնաբառի վերականգնման կոդն է՝ ${key}`,
    };

    await transporter.sendMail(mailOptions);
    

    return res.json({ message: 'Վերականգնման կոդը ուղարկվել է ձեր էլ․ հասցեին։' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Սերվերի սխալ։ Խնդրում ենք կրկին փորձել։' });
  }
}

async function CommitReset(req : Request , res : Response) {
      try {
          const {
            email,
            password,
          } = req.body;
          

      }catch (e) {

      }
}


export default {
  get,
  post,
  newPassword,
  CommitReset
};
