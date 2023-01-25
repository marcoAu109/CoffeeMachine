// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

//main
menu_header();
let current_water = 400;
let current_milk = 540;
let current_coffeeBeans = 120;
let current_disposableCups = 9;
let current_money = 550;
let no_of_cups = 0;
action_input();

function print_status() {
    console.log(`The coffee machines has:\n${current_water} ml of water\n` +
    `${current_milk} ml of milk\n${current_coffeeBeans} g of coffee beans\n` +
    `${current_disposableCups} disposable cups\n\$${current_money} of money\n`)
}
function action_input() {

    do{
    var user_input = input("Write action (buy, fill, take, remaining, exit):\n").toLowerCase();
    console.log();
    switch(user_input){
            case "buy":
                let coffee_type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
                // console.log();
                if (coffee_type.toLowerCase() === 'back') break;
                cup_input();
                if (parseInt(coffee_type) === 1 || parseInt(coffee_type) === 2 || parseInt(coffee_type) === 3) {
                    buy_coffee(parseInt(coffee_type),no_of_cups);
                };
                break;
            case "fill":
                fill_ingredient();
                break;
            case "take":
                take_money();
                break;
            case "remaining":
                print_status();
                break;
            case "exit":
                console.log("Thank you! Please enjoy your coffee!")
            break;
        }
    } while(user_input !== "exit");
}
function take_money(){
    console.log(`I gave you \$${current_money}`);
    current_money = 0;
    console.log();
}

function fill_ingredient(){
    let new_water = Number(input("Write how many ml of water you want to add:\n"));
    let new_milk = Number(input("Write how many ml of milk you want to add:\n"));
    let new_coffeeBean = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let new_cups = Number(input("Write how many disposable cups you want to add:\n"));
    console.log();
    current_water += new_water;
    current_milk += new_milk;
    current_coffeeBeans += new_coffeeBean;
    current_disposableCups += new_cups;
}
function buy_coffee(number,noOfCups) {
    switch (number){
        case 1:
            if (isEnough(number,noOfCups)){
                print_enoughR();
                current_water -= 250*noOfCups;
                current_coffeeBeans -= 16*noOfCups;
                current_money += 4*noOfCups;
                current_disposableCups -= noOfCups;
            }
            break;
        case 2:
            if (isEnough(number,noOfCups)){
                print_enoughR();
                current_water -= 350*noOfCups;
                current_milk -= 75*noOfCups;
                current_coffeeBeans -= 20*noOfCups;
                current_money += 7*noOfCups;
                current_disposableCups -= noOfCups;
            }
            break;
        case 3:
            if (isEnough()){
                print_enoughR();
                current_water -= 200*noOfCups;
                current_milk -= 100*noOfCups;
                current_coffeeBeans -= 12*noOfCups;
                current_money += 6*noOfCups;
                current_disposableCups -= noOfCups;
            }
            break;
    }
}
function print_enoughR(){
    console.log("I have enough resources, making you a coffee!\n");
}
function isEnough(number,cups){
    let flag = true;
    if (current_disposableCups < cups){
        flag = false;
        console.log("Sorry, not enough disposable cups!\n");
    } else {
        switch (number) {
            case 1:
                if (current_water < 250*cups) {
                    flag = false;
                    console.log("Sorry, not enough water!\n");
                }
                if (current_coffeeBeans < 16*cups) {
                    flag = false;
                    console.log("Sorry, not enough coffee beans!\n");
                }
                break;
            case 2:
                if (current_water < 350*cups) {
                    flag = false;
                    console.log("Sorry, not enough water!\n");
                }
                if (current_milk < 75*cups){
                    flag = false;
                    console.log("Sorry, not enough milk!\n");
                }
                if (current_coffeeBeans < 20*cups) {
                    flag = false;
                    console.log("Sorry, not enough coffee beans!\n");
                }
                break;
            case 3:
                if (current_water < 200*cups) {
                    flag = false;
                    console.log("Sorry, not enough water!\n");
                }
                if (current_milk < 100*cups){
                    flag = false;
                    console.log("Sorry, not enough milk!\n");
                }
                if (current_coffeeBeans < 12*cups) {
                    flag = false;
                    console.log("Sorry, not enough coffee beans!\n");
                }
                break;
        }
    }
    return flag;
}
function check_ingredients() {
    let water = Number(input("Write how many ml of water the coffee machine has:\n"));
    let milk = Number(input("Write how many ml of milk the coffee machine has:\n"));
    let coffee_bean = Number(input("Write how many grams of coffee beans the coffee machine has:\n"));
    let cups = Number(input("Write how many cups of coffee you will need:\n"));
    let cups_by_water = Math.floor(water/200);
    let cups_by_milk = Math.floor(milk/50);
    let cups_by_coffee_bean = Math.floor(coffee_bean/15);
    let min_cups = Math.min(cups_by_water ,cups_by_milk, cups_by_coffee_bean);
    if (min_cups == cups) {console.log("Yes, I can make that amount of coffee");}
    if (min_cups>cups) {console.log("Yes, I can make that amount of coffee"+
        `(and even ${min_cups-cups} more than that)`);}
    if (min_cups<cups){
        console.log(`No, I can make only ${min_cups} cups of coffee`);
    }
}


function menu_header() {
    console.log("Welcome to Marco's Coffee Shop!\n");
}

function cup_input() {
    no_of_cups = Number(input("Write how many cups of coffee you will need:\n"));
    }

function calculate_ingredient(cups) {
    let water = 200 * cups;
    let milk = 50 * cups;
    let coffee_beans = 15 * cups;
    console.log(`For ${cups} cups of coffee you will need:\n`+
    `${water} ml of water\n`+
    `${milk} ml of milk\n`+
    `${coffee_beans} g of coffee beans`)
}