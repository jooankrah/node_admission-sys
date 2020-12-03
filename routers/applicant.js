const path = require('path')
const express = require('express')
const passport = require("passport");
const Application = require('../models/application')
const Applicant = require('../models/applicant')
const Credential = require('../models/credential')
var middleware = require("../middleware")
const router = new express.Router()
const multer = require('multer')
//const sharp = require('sharp')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files')
    },
    filename:(req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() +  '.jpg')
      }
  })


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    },
})



//root route
router.get("/", (req, res)=>{
    res.render("register");
});

// show register form
router.get("/register", (req, res)=>{
   res.render("register"); 
});

// show login form
router.get("/applicant/login",middleware.isActive,(req, res)=>{
    res.render("login"); 
 });

 // show apply form
router.get("/applicant/apply",middleware.isLoggedIn,(req, res)=>{
    res.render("apply"); 
 }); 

 // show status page
router.get("/applicant/status",middleware.isLoggedIn,async (req, res)=>{

    console.log(req.user)
    //find the application with provided user
    Application.findOne({ applicant: req.user._id}).populate("applicant").exec(function(err, foundApplication){
        if(err){
           return console.log(err);
        } 
          console.log(foundApplication)

            //render show template with that application
            res.render("status", {Application:foundApplication});
    });
 });

 router.post('/applicant/apply',middleware.isLoggedIn, upload.single('image'),async (req, res, next) => {
    // req.file is the `avatar` file
    console.log(req.file)
    console.log('============')
    // req.body will hold the text fields, if there were any
    //var image = req.file.path.toString()
       // Create a new application and save to DB
    var newApplication = {      firstName: req.body.firstname,
                                lastName: req.body.lastname,
                                otherName: req.body.othername, 
                                dob:req.body.dob,
                                email:req.body.email,
                                pob:req.body.pob,
                                nationality:req.body.nationality,
                                maritalStatus:req.body.maritalStatus,
                                children:req.body.children,
                                address:req.body.address,
                                guardian:req.body.guardian,
                                results:req.body.results,
                                programs:req.body.programs,
                                signature:req.body.signature,
                                image:'/'+req.file.filename,
                                phone:req.body.phone,
                                sex:req.body.sex,
                                applicant:req.user._id,
                                status: "Submitted"
                        }
    //save application
    Application.create(newApplication, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect to status
            console.log(newlyCreated);
            res.render("status",{Application:newlyCreated});
        }
    });
  })


//add applicants to db
router.post('/register', async (req, res) => {
    Credential.findOne({ serial: req.body.serial, pin:req.body.pin}, function (err, user) {
            if(user){
            const applicant = new Applicant({serial:req.body.serial,applicationType:req.body.applicationType})
                try {
                    Applicant.register(applicant, req.body.pin, function(err, newApplicant){
                        if(err){
                            console.log(err)
                           return res.render("register");
                       }
                       passport.authenticate("local")(req, res, function(){
                           res.status(201).send()
                          res.redirect("/applicant/apply"); 
                       });
               })
                   }
                catch (e) {
                   res.status(400).send(e)
               }
            }else{
                console.log(user)
                res.render('register')
            }
    });

    
})


//login applicants
router.post('/applicant/login',passport.authenticate("local", 
{
    successRedirect: "apply",
    failureRedirect: "login"
}), async (req, res) => {
})

// logout route
router.get("/logout", async (req, res) =>{
   await req.logout();
    await res.redirect("/applicant/login");
 });


// APPLICATION EDIT ROUTE
router.get("/application/edit",middleware.isLoggedIn,(req, res) => {
    Application.findOne({ applicant: req.user._id}).populate("applicant").exec(function(err, foundApplication){
        if(err){
           return console.log(err);
        } 
          console.log(foundApplication)

            //render edit template with that application
     res.render("edit", {Application:foundApplication});
    });
 });
 
 // UPDATE APPLICATION
 router.post("/application/edit",middleware.isLoggedIn, async(req, res)=>{
                var newUpdate = {      firstName: req.body.firstname,
                    lastName: req.body.lastname,
                    otherName: req.body.othername, 
                    dob:req.body.dob,
                    email:req.body.email,
                    pob:req.body.pob,
                    nationality:req.body.nationality,
                    maritalStatus:req.body.maritalStatus,
                    children:req.body.children,
                    address:req.body.address,
                    guardian:req.body.guardian,
                    results:req.body.results,
                    programs:req.body.programs,
                    signature:req.body.signature,
                    image:'/'+req.file.filename,
                    phone:req.body.phone,
                    sex:req.body.sex,
                    applicant:req.user._id,
                    status: "Submitted"
            }
            //save application
            Application.findByIdAndUpdate({ applicant: req.user._id},newUpdate, function(err, updated){
            if(err){
            console.log(err);
            } else {
            //redirect to status
            console.log(updated);
            res.render("status",{Application:updated});
            }
        });
    });


//Print Application
router.get('/printproof',async(req,res)=>{
    Application.findOne({ applicant: req.user._id}).populate("applicant").exec(function(err, foundApplication){
        if(err){
           return console.log(err);
        } 
          console.log(foundApplication)

            //render show template with that application
            res.render("proof", {Application:foundApplication});
    });
})


module.exports = router