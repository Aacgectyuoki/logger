let fs = require("fs");
let obj = require("readline-sync");
// ask user for inputs
let id = obj.question("Enter your ID #: ");
console.log("ID: "+id);
debugger;

let name = obj.question("Enter your full name: ");
console.log("name: "+name);
debugger;

let email = obj.question("Enter your email address: ");
console.log("email address: "+email);
debugger;

// store inputs into JSON format
let empObj = {"id":id,"name":name,"email":email, "time entry was created": new Date().toISOString()};

// convert object to string 
var empString = JSON.stringify(empObj);

fs.writeFile("records.json",empString,{flag:"a"},(err)=> {
    if(!err){
        console.log("Success!")
        debugger;
    }
})
