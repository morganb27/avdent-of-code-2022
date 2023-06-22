const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    
    const arrays = content.split("\n");
    
    return arrays
    
}

const file_path = 'pairs.txt';
const data = read_file(file_path);

function subpairs() {
  let count = 0;
  data.map(element => {
    blocks = element.split(",");
    startValue1 = parseInt(blocks[0].split("-")[0]);
    endValue1 = parseInt(blocks[0].split("-")[1]);
    startValue2 = parseInt(blocks[1].split("-")[0]);
    endValue2 = parseInt(blocks[1].split("-")[1]);

    if (startValue2<=startValue1 && endValue2 >= endValue1) {
      count += 1
    } else if (startValue2>=startValue1 && endValue2 <=endValue1) {
      count += 1
    }
  });
  return count
}

console.log(subpairs());