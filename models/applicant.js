const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const applicantSchema = new mongoose.Schema({
    serial: {
      type:String,
      unique:true
    },
    pin: String,
    applicationType:{
      type:String,
      required:true
    }
});

applicantSchema.plugin(passportLocalMongoose,{
    usernameField: 'serial',
    passwordField: 'pin'
  })

applicantSchema.virtual('application', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'applicant'
})  
module.exports = mongoose.model("Applicant", applicantSchema);