const mongoose = require('mongoose')
const validator = require('validator')

const applicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    otherName: {
        type: String,
        required: true,
        trim: true
    },
    dob:{
        type: String,
        required: true,        
    },    
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    sex: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    pob: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    children: {
        type: Number,
    },
    address: {
        box : String,
        city: String,
        country:String
    },
    guardian: {
        name : String,
        address: String,
        phone:String,
        occupation:String
    },
    image: {
        type : String,
        required:true
    },
    results:[
        {
            indexNumber:String,
            school:String,
            yearStarted:String,
            yearCompleted:String
        }
    ],
    programs:[{
        type:String
    }],
    signature:{
        type:String,
        required:true
    },
    applicationType:{
        type:String
    },
    status: String,
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique:true,
        ref: 'Applicant'
    }
})


const Application = mongoose.model('Application', applicationSchema)

module.exports = Application