const path = require('path');

// console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// last portion
const base = path.basename(filePath);
console.log(base);

const dirName = path.dirname(filePath);
console.log(dirName);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
