const mongoose1 = require('mongoose');

mongoose1.connect('mongodb://localhost/TODO_List'); //This is where name of our database is wriiten


const db = mongoose1.connection;

db.on('error',console.error.bind(console,'Error connecting to Databse'));


db.once('open',function(){
    console.log("Succesfully connected to Database");
})

module.exports = db;