// test for clone

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.post("/contacts",(req,res)=>{ 
  console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.msg;
    var data = {
        "name":name,
        "email":email,
        "message":message,
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted successfully");
    });
    res.end('It worked!');
})
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
mongoose.connect('mongodb+srv://khushi0704:Khushi07@cluster0.gdshs.mongodb.net/test')
var db = mongoose.connection;
db.on('error',()=>console.log("Error in connecting to database"));
db.once('open',()=>console.log("Connected to the database"));
app.listen(port);
console.log('Server started at http://localhost:' + port);