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

    if (startValue1<startValue2 && endValue1<startValue2) {
      count = count;
    } else if (startValue2>endValue1) {
        count = count;
    } else if(endValue2 < startValue1) {
        count = count;
    } else if (startValue1 > endValue2) {
        count = count;
    } else {
        count++
    }
  });
  return count
  
}

console.log(subpairs());