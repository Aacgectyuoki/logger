let fs = require("fs");
let obj = require("readline-sync");

// ask user for number of inputs
var entries = obj.question("Enter the number of entries: ");
console.log(entries);
debugger;

let emp = new Array();

// ask user for inputs
for (var i=0; i<parseInt(entries); i++){

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
    let emp1 = {"id":id, "name":name,"salary":email, "time": new Date().toISOString()};
    emp.push(emp1);
    debugger;
}

// convert array object to string 
let jsonData = JSON.stringify(emp);
fs.writeFileSync("records.json", jsonData);
console.log('Success!');
