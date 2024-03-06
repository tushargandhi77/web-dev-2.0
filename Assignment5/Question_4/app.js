import http from 'http';
import { promises as fs } from 'fs';
import path from 'path';
import mime from 'mime';

const server = http.createServer(async (req, res) => {
  let filePath;

  
  switch (req.url) {
    case '/':
      filePath = './index.html';
      break;
    case '/about':
      filePath = './about.html';
      break;
    default:
      filePath = './404.html'; 
      break;
  }

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const contentType = mime.getType(filePath);

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
