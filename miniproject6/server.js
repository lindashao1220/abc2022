console.log("hello");

const express = require('express')
const app = express()
//const port = 3010;
const port = process.env.PORT;

app.use(express.static('public'));

app.get('/guess', (req, res) => {
    console.log(req.query.name);
    if(req.query.name == "Sleeping beauty" || req.query.name == "Sleeping Beauty" || req.query.name == "sleeping beauty"){
        res.redirect("/right");
    }else{
        res.redirect("/wrong");
    }
}
)



// let collectedAnswer = [];

// app.get("/sendAnswer",(req,res)=>{
//     let info = req.query;
//     let newAnswer = info.answer
//     collectedAnswer.push(newAnswer);
//     console.log(collectedAnswer);
//   })
  
//   app.get("/getAnswers",(req,res)=>{
//     console.log("someone asks for answer",collectedAnswer);
//    res.json({data:collectedAnswer});
//   })
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})