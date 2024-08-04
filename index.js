const fs = require("fs")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000



app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb://127.0.0.1:27017/empori").then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database Can't Be Connected")
})

app.post("/", async(req,res)=>{
    const userData = new User(req.body)
    await userData.save()
    alert("Details Submitted!")
})

app.get("/", (req, res)=>{
    let a = fs.readFileSync("contact.html")
    res.send(a.toString())
})

app.listen(port, ()=>{
    console.log("App running on port: ", port)
})