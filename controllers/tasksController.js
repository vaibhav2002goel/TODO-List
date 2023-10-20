console.log("In the tasks controller");

const TodoList = require('../models/todoListSchema'); // schema

let completed_tasks = [];

module.exports.addTask = function(request,response){

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const dateEntered = request.body.date;
    let year;
    let month;
    let day;

    let monthN;

    if(dateEntered == ''){
        monthN = "No deadline"
    }
    else{
        year = dateEntered.substr(0,4); 
        month = dateEntered.substr(5,2)
        day = dateEntered.substr(8,2);
    
        month = Number.parseInt(month);
        monthN = monthNames[month];
    }

    
    let categoryEntered = request.body.category;
    if(categoryEntered == 'Choose a Category'){
        categoryEntered = 'Others';
    }

    TodoList.create({
        description: request.body.description,
        category: categoryEntered,
        year: year,
        month:monthN,
        day:day,
        completed:false
    })
    .then(()=>{
        console.log("Added succesfully")
    })
    .catch((error)=>{
        console.log("Error : "+error);
    })

    return response.redirect('/');
}

module.exports.toggleTask = async function(request,response){
    console.log("Task has toggled Successfully");

    let newTask = await TodoList.findById(request.query.id);

    console.log(newTask.description);
    console.log("Before",newTask.completed);

    newTask.completed = !newTask.completed;

    console.log("After",newTask.completed);

    await newTask.save(); // This function is used to save any changes that are made in the database.

    if(newTask.completed){
        completed_tasks.push(newTask.id);
    }
    else{
        console.log("**************Removing element from array")
        for(let i = 0; i<completed_tasks.length;i++){
            if(completed_tasks[i] == newTask.id){
                completed_tasks.splice(i,1);
                break;
            }
        }
    }

    for(let task of completed_tasks){
        console.log(task);
    }

    // .then((newTask)=>{
    //     console.log(newTask.description);
    //     console.log("Before",newTask.completed);
    //     newTask.completed = !newTask.completed;
    //     console.log("After",newTask.completed);
    //     // console.log("New Task : ",newTask);
    // })
    // .catch((error)=>{
    //     console.log("Error!!")
    // })


    return response.redirect('/');
}

module.exports.deleteTask = async function(request,response){
    console.log("Task is being deleted");

    for(let task of completed_tasks){
        console.log(task);
    }

    for(let task of completed_tasks){
        let deletedTask = await TodoList.findByIdAndDelete(task);
        console.log(deletedTask);
        
    }

    // for(let task of TodoList){       // Can't Iterate over a Model object 
    //     if(task.completed == 'true'){
    //         TodoList.findByIdAndDelete(task.id)
    //         .then(()=>{
    //             console.log("Task deleted Succesfully")
    //         })
    //         .catch(()=>{
    //             console.log("Task Not deleted")
    //         })
    //     }
    // }

    return response.redirect('/');
}