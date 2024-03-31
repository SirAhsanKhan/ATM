#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the ATM ");
let balance = 15000;
let myPin = 5522;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please Enter your pin code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("your Pin is correct, (please proceed)");
    let optionAns = await inquirer.prompt([
        {
            name: "option",
            message: "please select one of the option",
            type: "list",
            choices: ["withdraw", "check balance", "deposit", "transfer money"],
        },
    ]);
    if (optionAns.option === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please Enter the amount",
                type: "number",
            },
        ]);
        let currentBalance = (balance -= amountAns.amount);
        if (amountAns.amount <= balance) {
            console.log(`your remaining  balance is ${currentBalance}`);
        }
        else if (amountAns.amount > balance) {
            console.log("your balance is not sufficient ");
        }
    }
    else if (optionAns.option === "deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "please Enter the amount",
                type: "number",
            },
        ]);
        let newBalance = (balance += depositAmount.cash);
        console.log(`your new balance is ${newBalance}`);
    }
    else if (optionAns.option === "transfer money") {
        let detail = await inquirer.prompt([
            {
                name: "userDetail",
                message: "please Enter account holder's ID",
                type: "number",
            },
        ]);
        let transferAns = await inquirer.prompt([
            {
                name: "transfer",
                message: "please Enter the amount",
                type: "number",
            },
        ]);
        let BALANCE = balance - transferAns.transfer;
        if (transferAns.transfer <= balance) {
            console.log(`transfer successful  to ${detail.userDetail} your remaining balance is ${BALANCE}`);
        }
        else if (transferAns.transfer > balance) {
            console.log("your balance is insufficient");
        }
    }
    else if (optionAns.option === "check balance") {
        console.log(`your balance is ${balance}`);
    }
}
else {
    console.log("your pin is incorrect ( please Enter correct pin)");
}
