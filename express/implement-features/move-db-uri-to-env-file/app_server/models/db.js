
const mongooose = require('mongoose');
const dbURI = process.env.DB_URI;
mongooose.connect(dbURI, {useNewUrlParser: true});
mongooose.connection.on('connected', ()=> {
  console.log(`Mongoose connected to ${dbURI}`)
});
mongooose.connection.on('error', err => {
  console.log(`Mongoose connection: error:`, err)
});
mongooose.connection.on('disconnected', ()=> {
  console.log(`Mongoose disconnected`)
});

require('./locations');