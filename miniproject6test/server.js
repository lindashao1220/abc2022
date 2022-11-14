console.log("hello");

const express = require('express')
const app = express()
const port = 3000

// IF a requested file is availbale inside the pblic
// folder, just return. no questions asked.
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) =>{
//   //res.send("hello world!");
//   res.sendFile(__dirname+"/public/mainpage/index.html");
// })

app.get('/guess', (req, res) => {
    console.log(req.query.name);
    if(req.query.name == "linda"){
        res.sendFile(__dirname+"/public/right/index.html");
    // }else{
    //     res.sendFile(__dirname+"/public/mainpage/index.html");
    }
}
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})