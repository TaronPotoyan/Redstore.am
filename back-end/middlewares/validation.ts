import { Request, Response, NextFunction } from 'express';

export default function validateLogin(req: Request, res: Response, next: NextFunction): void {
  const { name, password } = req.body;

  if (
    !name || typeof name !== 'string' ||
    !password || typeof password !== 'string' ||
    password.length < 6
  ) {
    res.status(400).json({ message: 'Անվավեր անուն կամ գաղտնաբառ։ Գաղտնաբառը պետք է լինի առնվազն 6 նիշ։' });
    return; 
  }

  next();
}
