
var express =require('express')
var body_parser = require('body-parser')

var app = express();

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/hello",(req,res)=>res.send("Hi, This is sample page in Google Cloud."));

app.listen(9000,()=>{
    console.log("Quiz Server is started...")
})
