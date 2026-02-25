// let name = "hanane"
// let age = 22
// function greetUser(name,age){
//     if(age < 18){
//         console.log(`salut ${name}, tu es encore mineur ! `); 
//     }else{
//         console.log(`Bienvenue ${name}, tu as ${age} ans !`); 
//     }
// }
// greetUser("Sara",16);
// greetUser("Ali",22);


// EX2
// const user = {
//     names: "Nora",
//     city: "Casablanca",
//     job: "Dévloppeuse",
//     introduce(){
//         return `Je m'appelle ${this.names}, je vis à ${this.city} et je suis ${this.job}`;
//     }
// };
// console.log(user.introduce());

// const { names,job } = user;
// console.log(`${names} travaille comme ${job} .`)

// EX3

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers,4,5];

// function sumAll(...nums){
//     let total = 0;
//     for (const n of nums) total += n;
//     return total
// }
// console.log(sumAll(...newNumbers));


// challenge1

let todos = [];
let nextId = 1;

const addTodo = (text)=> {
    const todo ={id: nextId++,text};
    todos= [...todos,todo];
};

function removeTodo(id) {
const index = todos.findIndex(t => t.id === id);
if (index !== - 1) todos.splice(index, 1);
}
function listTodos() {
for (const { id, text } of todos) {
console. log( `"${id} - ${text}` );
}
}
     
addTodo("Apprendre ES6");
addTodo("Faire les exercices");
listTodos();
removeTodo(1) ;
listTodos();


// const users = [];
// let nextId = 1;

// function addUser(name,age,city){
//     const user ={
//         id: nextId++,
//         name,age,city
//     };
//     users= [...users,user];
// }



// DOM

// let btnInput = document.getElementById("btnInput")
// let btn = document.getElementById("btn");
// let liste = document.getElementById("liste");

// btn.addEventListener("click",function(){
//     let val = btnInput.value ;
//     let div = document.createElement("div");
//     div.style.backgroundColor = val ;

//     div.style.width = "60px";
//     div.style.height = "60px";
//     div.style.margin = "5px";
//     div.style.display = "flex";
//     div.style.borderRadius = "6px";
//     div.style.cursor = "pointer";
   
//     div.addEventListener("click",function(){
//         div.remove();
//     })
    
//     liste.appendChild(div);

//      btnInput.value = "";
// });


// let btnInput = document.getElementById("btnInput");
// let liste = document.querySelectorAll(".liste");

// btnInput.addEventListener("input", function() {
//     let val = btnInput.value.toLowerCase();

//     liste.forEach(function(li){
//         let text = li.textContent.toLowerCase();
//         if(text.includes(val)){
//             li.style.display = "";
//         }else{
//             li.style.display = "none";
//         }
//     });
//  });
