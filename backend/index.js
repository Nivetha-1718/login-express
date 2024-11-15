const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
var username = "Nivetha"
var password = 444

app.use(express.json())
//app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res){
    console.log(req.body.username)
    if(req.body.username === username && req.body.password == password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.listen(5000,function(){
    console.log("Server Started....")
})