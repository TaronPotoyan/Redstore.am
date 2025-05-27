import { Request, Response, NextFunction } from 'express';

export default function validateLogin(req: Request, res: Response, next: NextFunction): void {
  const { name, password } = req.body;

  if (typeof name !== 'string' || typeof password !== 'string' || !name || !password) {
    res.status(400).json({ message: 'Invalid name or password' });
    return;
  }

  next(); 
}
