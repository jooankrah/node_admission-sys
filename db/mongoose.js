const mongoose = require('mongoose')

const dbUrl = 'mongodb://Jooankrah:Nanakusi1z@ds061681.mlab.com:61681/heroku_q0q5mnrs'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})