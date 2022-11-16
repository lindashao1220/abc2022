const express = require('express')
const app = express()
const port = 3010;

let collectedDestinations = [];


// If a requested file is availbale inside the pblic
// folder, just return. no questions asked.
app.use(express.static('stuff-everyone-can-get'));


app.get("/sendDestination", (req, res)=>{
    console.log("got new destination")
    let info = req.query;
    console.log(info); // { destination: 'helo' }
    let newDest = info.destination
    console.log(newDest);
    collectedDestinations.push(newDest);
    console.log(collectedDestinations);
    // res.send("goodbye")
    // res.sendFile("special.html")
})

app.get("/getDestinations", (request, response)=>{
    console.log("someone asks for this info", collectedDestinations)
    // response.send("leonleon");
    response.json({data: collectedDestinations});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})