// import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// import controllers
import { getAllProductsController, getOneProductController, addProductController, updateProductController, deleteProductController } from './controllers/ProductController.js';

// create express app instance
const app = express();

// set up middleware
app.use(bodyParser.json());
app.use(cors());

// set up database connection
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB database', error);
  });

// set up routes
app.get('/products', getAllProductsController);
app.get('/products/:productId', getOneProductController);
app.post('/products', addProductController);
app.put('/products/:productId', updateProductController);
app.delete('/products/:productId', deleteProductController);

// start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
