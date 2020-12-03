var Applicant = require("../models/applicant");
var Applications = require("../models/application");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/applicant/login");
}

middlewareObj.isActive = function(req, res, next){
    if(req.isAuthenticated()){
    return  res.redirect("/applicant/apply");;
    }
    next();
}


module.exports = middlewareObj;