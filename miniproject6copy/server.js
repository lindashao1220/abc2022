console.log("hello");

const express = require('express')
const app = express()
const port = 3000;

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

let collectedAnswer = [];

app.get("/sendAnswer",(req,res)=>{
    let info = req.query;
    let newAn = info.answer;
    let an;
    let rightsum = 0;
    let wrongsum = 0;
    if (newAn == "Sleeping beauty" || newAn == "Sleeping Beauty" || newAn == "sleeping beauty"){
      an = "right"
      rightsum = rightsum + 1;
    }else{
      an = "wrong";
      wrongsum = wrongsum + 1;
    }
    collectedAnswer.push(an);
    // console.log(collectedAnswer);
  })
  
  app.get("/getAnswers",(req,res)=>{
    console.log("someone asks for answer",collectedAnswer);
   res.json({data:collectedAnswer});
  })
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})