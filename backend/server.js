import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import projectRoutes from './routes/projectRoutes.js';



connectDB();

const app = express();


const port = process.env.PORT || 5000;

app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/projects', projectRoutes);

const __dirname = path.resolve(); 

if (process.env.NODE_ENV === 'development') { 
  // set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // any route that is not api will be redirected to index.html
  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
);
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
});
}


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});