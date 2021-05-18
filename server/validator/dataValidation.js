const Validator =require('validator');
const isEmpty =require('is-empty');
const isLength = require('is-length');


module.exports=function DataValidation(data){

    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
    data.address = !isEmpty(data.address) ? data.address : "";

    if(Validator.isEmpty(data.username)){
        errors.username = "UserName is required"
    }else if(!Validator.isAlphanumeric(data.username,'en-US')){
        errors.username= "Enter Alpha Numeric Characters";
    }
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    console.log(data.phoneNumber)
    if(Validator.isEmpty(data.phoneNumber)){
        errors.phoneNumber = "Phone Number is required";
    }else if(!Validator.isMobilePhone(data.phoneNumber) || (!Validator.isLength(data.phoneNumber ,{min:10,max:10}))){
        errors.phoneNumber = "Enter 10 digit Number";
    }


    if(Validator.isEmpty(data.address)){
        errors.address = "Address is required";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };

};
