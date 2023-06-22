const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("\n\n");

    return arrays.map(block => block.split("\n").map(Number));
}

const file_path = 'ElvesFood.txt';
const data = read_file(file_path);


function ElfCarryingMostCalories() {
    let elf1_mostCalories = 0;
    let elf2_mostCalories = 0;
    let elf3_mostCalories = 0;
    let currentCalories = 0;
    data.forEach(block => {
        currentCalories = 0;
        block.forEach(element => {
            currentCalories += element;
        });
        if (currentCalories > elf1_mostCalories) {
            elf3_mostCalories = elf2_mostCalories;
            elf2_mostCalories = elf1_mostCalories;
            elf1_mostCalories = currentCalories;
        } else if (currentCalories > elf2_mostCalories) {
            elf3_mostCalories = elf2_mostCalories;
            elf2_mostCalories = currentCalories
        } else if (currentCalories > elf3_mostCalories) {
            elf3_mostCalories = currentCalories;
        }
    });
        
    
    console.log(elf1_mostCalories)
    console.log(elf2_mostCalories)
    console.log(elf3_mostCalories)
    return elf1_mostCalories + elf2_mostCalories + elf3_mostCalories 
    
}

console.log(ElfCarryingMostCalories())

