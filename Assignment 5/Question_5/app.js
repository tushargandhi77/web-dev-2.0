import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
const publicPath = path.join(path.dirname(new URL(import.meta.url).pathname), 'public');
app.use(express.static(publicPath));

// Define routes
app.get('/', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);
});

app.get('/about', (req, res) => {
  const aboutPath = path.join(publicPath, 'about.html');
  res.sendFile(aboutPath);
});

// Redirect to the '/' route for any other route
app.get('*', (req, res) => {
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
