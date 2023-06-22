const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("\n\n");

    return arrays.map(block => block.split("\n").map(Number));
}

const file_path = 'ElvesFood.txt';
const data = read_file(file_path);
console.log(data)


function ElfCarryingMostCalories() {
    let mostCalories = 0;
    let currentCalories = 0;
    
    data.forEach(block => {
        currentCalories = 0;
        block.forEach(element => {
            currentCalories += element;
        });
        if (currentCalories > mostCalories) {
            mostCalories = currentCalories;
        }
    });
        
    return mostCalories
}

console.log(ElfCarryingMostCalories())

