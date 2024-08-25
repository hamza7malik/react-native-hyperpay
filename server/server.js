const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// test server api
app.get('/test', (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'Test Successfull',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
