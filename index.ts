#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber: number = Math.floor(1000 + Math.random() * 90000)

let myBalance: number = 0

let Answer = await inquirer.prompt(
    [
    {
        name: "students",
        type: "input",
         message: "Enter student Name: ",
         validate: function (value) {
    if (value.trim() !== "" ) {
        return true;
    }
    return "Please enter a non-empty value.";
},
},
 {
    name: "courses",
    type: "list",
    message: "Select the course to enrolled",
    choices: ["Ms.Office", "HTML", "Javascript", "Typescript", "Python"]
}
    ]
);

const tutionfee: {[key: string]: number} = {
    "Ms.Office" : 2000,
    "HTML" : 2500,
    "Javascript" : 5000,
    "Typescript" : 6000,
    "Python" : 10000,
};
console.log(`\nTution fees: ${tutionfee[Answer.courses]}\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
            name : "payment",
            type: "list",
            message : "Select payment methood",
            choices : ["Bank Transfer", "Easypaisa", "Jazzcash"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "Please enter a non-empty value.";
            },
        }
    ]
);

console.log(`\n You select payment methood ${paymentType.payment}\n`);


const tutionfees = tutionfee[Answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionfees === paymentAmount) {
    console.log(`Congratulation, You have successfully enrolled in ${Answer.courses}.\n`);

let ans = await inquirer.prompt([
    {
        name : "select",
        type: "list",
        message: "What would you like to next?",
        choices: ["View Status", "Exit"]
    }
])

if (ans.select === "View Status") {
    console.log("\n**********Status**********\n");
    console.log(`Student name: ${Answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${Answer.courses}`);
    console.log(`Tution fees paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
    } else {
        console.log("Exiting Student Management System");
        
    }

} else {
    console.log("Invalid amount due to course\n");
}