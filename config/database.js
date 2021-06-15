const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

db.on('connected', ()=>{
    console.log(`Connected to MongDB on ${db.host}:${db.port}`)
})