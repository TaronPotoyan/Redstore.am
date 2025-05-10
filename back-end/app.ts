import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  console.log('works');
    
  res.send('🚀 TypeScript Backend Running');
});

console.log('Runs');


app.listen(3000, () => {
    console.log('🚀 App running at http://localhost:3000');
  });
  

