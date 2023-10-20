console.log("In the assets js file")


/*****************************************************************************************************************/


const task_category_bg = document.getElementsByClassName('task-category')
// console.log(task_category_bg);
var colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}

for(i of task_category_bg){
    i.style.backgroundColor = colors[ Math.floor( (Math.random())*colors.length ) ]
}


/*****************************************************************************************************************/


const description_input = document.getElementById('description-input');
const description = document.getElementById('description');

const category_input = document.getElementById('category-input');
const category = document.getElementById('category');

const date_input = document.getElementById('dueDate-input');
const date = document.getElementById('due-date');

let bg = [description,description_input,category,category_input,date,date_input]


description_input.addEventListener('mousedown',function(){
    description_input.style.backgroundColor = '#F1F0E8';
    description.style.backgroundColor = '#F1F0E8';
})
description.addEventListener('mouseleave',function(){
    description_input.style.backgroundColor = 'white';
    description.style.backgroundColor = 'white';
})


category_input.addEventListener('mousedown',function(){
    category_input.style.backgroundColor = '#F1F0E8';
    category.style.backgroundColor = '#F1F0E8';
})
category.addEventListener('mouseleave',function(){
    category_input.style.backgroundColor = 'white';
    category.style.backgroundColor = 'white';
})


date_input.addEventListener('mousedown',function(){
    date_input.style.backgroundColor = '#F1F0E8';
    date.style.backgroundColor = '#F1F0E8';
})
date.addEventListener('mouseleave',function(){
    date_input.style.backgroundColor = 'white';
    date.style.backgroundColor = 'white';
})


/*****************************************************************************************************************/


// let input = document.getElementsByClassName('custom-checkbox');
// let description_checked = document.getElementsByClassName('task-description');
// let date_checked = document.getElementsByClassName('task-date-checked');

// for(let i of input){
//     i.addEventListener('click',function(){

//         console.log(this.getAttribute('id'));
//         let value = this.getAttribute('data-checked');
//         let element = document.getElementById( this.getAttribute('id') );

//         if(value=='unchecked'){
//             element.style.textDecoration = "line-through";
//             element.style.backgroundColor = "red";
//             console.log("Inside : ",value,element);
//         }
//         else{
//             element.style.textDecoration = "none";
//             element.style.color = "gray";
//             console.log(value,element);
//         }
//     })
// }