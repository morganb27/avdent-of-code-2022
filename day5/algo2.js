const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("\n");
    
    return arrays
    
}

const file_path = 'instructions.txt';
const data = read_file(file_path);

let stacks = [
["F", "D", "B", "Z", "T", "J", "R", "N"],
["R", "S", "N", "J", "H"],
["C", "R", "N", "J", "G", "Z", "F", "Q"],
["F", "V", "N", "G", "R", "T", "Q"],
["L", "T", "Q", "F"],
["Q", "C", "W", "Z", "B", "R", "G", "N"],
["F", "C", "L", "S", "N", "H", "M"],
["D", "N", "Q", "M", "T", "J"],
["P","G", "S"],
];

function movingCrates() {
    data.forEach(block => {
        const instructions = block.split(" ").filter(element => !isNaN(element));
        let numberOfCrates = parseInt(instructions[0]);
        let startingCrate = parseInt(instructions[1]);
        let endingCrate = parseInt(instructions[2]);
        let temp = []

        for (let i =0; i < numberOfCrates; i++) {
            temp.push(stacks[startingCrate-1].pop())    
        }
        temp.reverse().forEach(element => {
            stacks[endingCrate-1].push(element)
        });
    });
    lastElementOfCrates();
}

function lastElementOfCrates() {
    stacks.forEach(block => {
        console.log(block[block.length -1]);
    });
}

movingCrates();