
var express =require('express')
var body_parser = require('body-parser')

var app = express();

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/hello",(req,res)=>res.send("Welcome to CI&CD page :) "));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Quiz Server is started...")
})
