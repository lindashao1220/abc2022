console.log("hello i am linda on the server");

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World! nihao')
})

app.get('/swimming', (req, res) => {
    res.send('~~~~~~~~~~')
  })

app.get('/treehouse', (req, res) => {
    console.log(req);
    res.sendFile(__dirname+"/treehouse/index.html");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})