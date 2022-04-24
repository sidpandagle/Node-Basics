// Package and Module
// const log = require('./data');
// log('test');

//Callbacks
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };
// const operateAndShow = (a, b, c) => {
//   console.log(c(a, b));
// };
// operateAndShow(3, 2, add);
// operateAndShow(3, 2, sub);

//EventEmitter
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('test', (a, b) => {
//   console.log(a, b);
// });
// eventEmitter.emit('test', 1, 10);

//Buffers
// const buff = Buffer.from('Hey'); //1
// const buff = Buffer.alloc(4); //2
// buff.write('Hey');  //2
// buff[1] = 79;
// console.log(buff.toString());

// FS
// const fs = require('fs');
// // const fileContent = fs.readFile(__dirname + '/data.js', (err, data) => {
// const fileContent = fs.readFileSync('./data.js', (err, data) => {
//   if (err) throw err;
//   // console.log(data.toString());
//   return data.toString();
// });
// console.log(fileContent);

//Streams
// const fs = require('fs');
// const readableStream = fs.createReadStream('./data.js', 'utf8');
// const writeableStream = fs.createWriteStream('./data1.js');
// readableStream.on('data', (dataChunck) => {
//   console.log('dataChuck Recieved');
//    writeableStream.write(dataChuck);
// });
// // readableStream.pipe(writeableStream);
