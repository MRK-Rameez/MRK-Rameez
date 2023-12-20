import inquirer from 'inquirer';

let answer = await inquirer.prompt([{
  type:"number",
  name:"num1",
  message:"type your first number"
},{
  type:"number",
  name:"num2",
  message:"type your second number"
},
{ 
  type:"list",
  name:"operation",
  message:"choose your operation",
  choices:["+","-","*","/"]
}])

let result:number; 

switch (answer.opeartion){
   case"+":
   result= answer.num1 + answer.num2;
    console.log("result");
    break;

    case"-":
     result= answer.num1 - answer.num2;
      console.log("result");
      break;

    case"*":
     result= answer.num1 * answer.num2;
      console.log("result");
      break;

    case"/":
     result= answer.num1 / answer.num2;
      console.log("result");
      break;

    
    
}