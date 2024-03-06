import fs from 'fs/promises';

class FileOperations {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async readFile() {
    try {
      const content = await fs.readFile(this.filePath, 'utf-8');
      console.log(`File content:\n${content}`);
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
    }
  }

  async writeFile(data) {
    try {
      await fs.writeFile(this.filePath, data, 'utf-8');
      console.log('File written successfully');
    } catch (error) {
      console.error(`Error writing to file: ${error.message}`);
    }
  }

  async appendToFile(data) {
    try {
      await fs.appendFile(this.filePath, data, 'utf-8');
      console.log('Data appended to file successfully');
    } catch (error) {
      console.error(`Error appending to file: ${error.message}`);
    }
  }

  async deleteFile() {
    try {
      await fs.unlink(this.filePath);
      console.log('File deleted successfully');
    } catch (error) {
      console.error(`Error deleting file: ${error.message}`);
    }
  }
}

export default FileOperations;
