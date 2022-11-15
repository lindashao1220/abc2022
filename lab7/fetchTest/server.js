console.log("hello i am linda on the server");

const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

let collectedPet = [];

app.use(express.static('public'));

app.get('/sendPet', (req, res) => {
  console.log("got new pets");
  let info = req.query;
  let newPet = info.pet
  collectedPet.push(newPet);
  console.log(info);
  console.log(collectedPet);
//   res.send('goodbye');
 })

 app.get('/getPet', (request, response) => {
  console.log("someone askes for this info", collectedPet);
  // response.send("linda");
  response.json({data: collectedPet, name:"Linda"});
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