
const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("\n");
    

    return arrays.map(block => block.split(","));
    
}

const file_path = 'strategyGuide.txt';
const data = read_file(file_path);


function winTournament(input) {
    let points = 0;
    input.forEach(array => {
        let player1 = array[0][0]
        let player2 = array[0][2]
        if (player1 === "A" && player2 === "X") {
            points += 3;
        } else if (player1 === "A" && player2 === "Y") {
            points += 4;
        } else if (player1 === "A" && player2 === "Z") {
            points += 8;
        } else if (player1 === "B" && player2 === "X") {
            points += 1;    
        } else if (player1 === "B" && player2 === "Y") {
            points += 5;
        } else if (player1 === "B" && player2 === "Z") {
            points += 9;
        } else if (player1 === "C" && player2 === "X") {
            points += 2;
        } else if (player1 === "C" && player2 === "Y") {
            points += 6;    
        } else if (player1 === "C" && player2 === "Z") {
            points += 7;
        }
    });
    return points
}

console.log(winTournament(data));