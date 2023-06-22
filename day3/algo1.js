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

function findItemBothCompartment() {
    let count = 0;
    data.forEach(element => {
        let n = element.length/2
        let first_compartment = element.substring(0, n)
        let second_compartment = element.substring(n)
        let countedLetters = new Set();

        outer:
        for(let i=0; i<first_compartment.length; i++) {
            for(let j=0; j<second_compartment.length;j++) {
                if (first_compartment[i] === second_compartment[j] && !countedLetters.has(first_compartment[i])) {
                    count += itemValues[first_compartment[i]];
                    countedLetters.add(first_compartment[i]); 
                    console.log(countedLetters)
                    continue outer;
                    
                }
            }
        }
    });
    return count
}

console.log(findItemBothCompartment());

