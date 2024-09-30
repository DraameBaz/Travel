const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { string } = require('zod');


const ContactSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  message:{
    type: String,required:true
  }
});
const Contact = mongoose.model('ContactUs', ContactSchema);
module.exports=Contact;