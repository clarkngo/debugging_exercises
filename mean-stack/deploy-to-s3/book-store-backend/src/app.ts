import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fetchBooks from './controllers/fetch-books';
import fetchBook from './controllers/fetch-book';
import updateBook from './controllers/update-book';
import deleteBook from './controllers/delete-book';

import addBookController from './controllers/add-book';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const app = express();
// Set the Access-Control-Allow-Origin to htpp://localhost:4200 to allow our Angular app to call the API
app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});
// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// The router
app.post('/book', addBookController);
app.get('/books', fetchBooks);
app.get('/book/:id', fetchBook);
app.put('/book', updateBook);
app.delete('/book/:id', deleteBook);

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));
