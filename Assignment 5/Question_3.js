import FileOperations from './FileHandler.js';

const filePath = 'example.txt';
const fileOps = new FileOperations(filePath);

fileOps.readFile();
fileOps.writeFile('Hello, world!');
fileOps.appendToFile('\nAdditional content.');
fileOps.readFile();
fileOps.deleteFile();
