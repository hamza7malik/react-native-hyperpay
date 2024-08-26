const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// test server api
app.get('/payment/configure', (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'Payment Configured',
    timestamp: new Date().toISOString(),
  });
});

app.get('/payment/status', (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'Fetched payment status',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
