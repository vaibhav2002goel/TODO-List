console.log("1")


//SETTING UP THE SERVER
const express = require('express');
const app = express();
const port = 8000;

//CONNECTING TO DATABASE AND SETTING THE SCHEMA
const db = require('./config/mongoose'); //database
const TodoList = require('./models/todoListSchema'); // schema


//VIEW ENGINE
app.set('view engine','ejs');
app.set('views','./views');


//FOR READING INPUT FROM THE FORM //MIDDLEWARE
app.use(express.urlencoded({extended : true}));


//ASSETS FOLDER
app.use(express.static('assets'));


//ROUTES //MIDDLEWARE
app.use('/',require('./routes/home'))
app.use('/tasks',require('./routes/tasks'));



//LISTEN
app.listen(port,function(error){
    if(error){
        console.log("Server is not running : "+error);
    }

    else{
        console.log(`Server is running on port : ${port}`);
    }
})