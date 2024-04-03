#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList =[];
let codition =true;
console.log (chalk.blue.bold.italic.underline("\n\t Welcome to Farida-Todo-List Application \n"));

while (codition){
    let addTask = await inquirer.prompt([
    {
     name:"task",
     type:"input",
     message :"Enter your new task :"
    }
]);
todoList.push(addTask.task);

console.log(`${ addTask.task}Task added in todo list successfully`);

let addMoreTask =await inquirer.prompt([
    {
     name:"addMore",
     type:"confirm",
     message: "Do you want to add more task ?",
     default:"false"
    }
]);
codition =addMoreTask.addMore
}
console.log("your updated todo list:",todoList);
