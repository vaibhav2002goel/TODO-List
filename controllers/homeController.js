console.log("In the homeController.js")


// const todo = [
//     {
//         category: "home",
//         title: "Gym",
//         completed : true,
//         day: 12,
//         month: "January",
//         year: 2023
//     }
// ]


const TodoList = require('../models/todoListSchema'); // schema

module.exports.home = function(request,response){

    // console.log(request);

    // return response.render('home',{
        //     title:"TODO LIST",
        //     tasks_list:todo
        // })
        
    console.log("I am in home");

    async function displayList(){
        const todo = await TodoList.find({});

        return response.render('home',{
            title:"TODO LIST",
            tasks_list:todo
        })
    }

    displayList();

 }