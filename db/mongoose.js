const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/uniapp'||'mongodb://Jooankrah:Nanakusi1z@ds061681.mlab.com:61681/heroku_q0q5mnrs', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})