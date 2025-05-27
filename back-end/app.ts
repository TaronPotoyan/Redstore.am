import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import route_phons from './routes/rout_phons'
import rout_all from './routes/route_getall';
import rout_client from './routes/rout_client';


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Redstore')
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/phons' ,route_phons);
app.use('/products',rout_all);
app.use('/client',rout_client);

app.listen(3000, () => {
    console.log('🚀 App running at http://localhost:3000');
});