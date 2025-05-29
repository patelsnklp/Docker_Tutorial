const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      Name: <input type="text" name="name" /><br/>
      Email: <input type="email" name="email" /><br/>
      <input type="submit" />
    </form>
  `);
});

app.post('/submit', async (req, res) => {
  await axios.post('http://backend:5000/submit', req.body);
  res.send("Data submitted successfully!");
});

app.listen(8000, () => console.log('Frontend running on port 8000'));
