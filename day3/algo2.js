const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("\n");
    
    return arrays
    
}

const file_path = 'rucksacks.txt';
const data = read_file(file_path);

let itemValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
}

let groupedData = []
for (let i=0; i< data.length; i+=3) {
    let group = data.slice(i, i+3)
    groupedData.push(group)
}



function commonBadge() {
    let count =0;
    groupedData.forEach(element => {
        let countedLetters = new Set();

        outer:
        for (let i =0; i<element[0].length; i++) {
            for (let j=0; j<element[1].length; j++) {
                for (let k=0; k<element[2].length; k++) {
                    if (element[0][i] === element[1][j] && element[0][i] === element[2][k] && !countedLetters.has(element[0][i])) {
                        count += itemValues[element[0][i]];
                        countedLetters.add(element[0][i]);
                        continue outer;
                        
                    }
                }
            }
        }
    });
    return count
}

console.log(commonBadge())