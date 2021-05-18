const Data = require('../model/data');
const DataValidation = require('../validator/dataValidation');


exports.saveData = (req,res,next) => {
const {errors,isValid} = DataValidation(req.body);
if (!isValid) {
    return res.status(400).json(errors);
 }
 const user= new Data({
     username:req.body.username,
     phoneNumber:req.body.phoneNumber,
     email:req.body.email,
     address:req.body.address
});

 user.save((err, doc) => {
     if (err) return res.json({ success: false, err })
     return res.status(200).json({ success: true,message:"Successfully Saved" })
 })
 
}

exports.getData = async (req,res,next) => {
    try{
        const data = await Data.find({})
        res.status(200).json({success:true,data})
    }
    catch (error) 
    {
        next(error)
    }

}

exports.removeData= (req,res) => {
    console.log(req.body)
    Data.findOneAndDelete({ phoneNumber:req.body.phoneNumber })
    .exec((err, doc) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, doc })
    })
}