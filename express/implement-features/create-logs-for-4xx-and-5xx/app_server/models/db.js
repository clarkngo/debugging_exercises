const mongooose = require('mongoose');
const dbURI = 'mongodb://localhost/Loc8r';
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