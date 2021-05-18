const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
        email: {
            type: String,
            match: [
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              "Please provide a valid email",
            ],
          },
    address:{
        type:String
    }

})


const Data = mongoose.model('UserData', UserSchema);
  
module.exports = Data;