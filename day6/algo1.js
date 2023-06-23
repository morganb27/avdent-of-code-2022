const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("");
    
    return arrays
    
}

const file_path = 'input.txt';
const data = read_file(file_path);

console.log(data)

function FindingMarker(arr) {
    for(let i = 0; i<arr.length;i++) {
        s = new Set([arr[i], arr[i+1], arr[i+2], arr[i+3], arr[i+4], arr[i+5], arr[i+6], arr[i+7], arr[i+8], arr[i+9], arr[i+10], arr[i+11], arr[i+12], arr[i+13]])
        if (s.size === 14) {
            return i+14
        }    
    }      
}


console.log(FindingMarker(data))