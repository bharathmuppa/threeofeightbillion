const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employees', (req, res) => {
  res.send( {
    "employees": [
      {
        name: 'pakaodi sasi',
        age: 25,
      },
      {
        name: 'chakodi chaari',
        age: 27,
      },
      {
        name: 'bharath',
        age: 30,
      }
    ]
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})