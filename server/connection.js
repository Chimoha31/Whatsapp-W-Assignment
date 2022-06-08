const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://mernchat-user:${process.env.DB_PW}@june8ciccc.z5ma7.mongodb.net/?retryWrites=true&w=majority`, (err) => {
  if(err) {
    console.log('There was an error to connect MongoDB');
  }else{
    console.log("Successfully connected MongoDB!");
  }
})

