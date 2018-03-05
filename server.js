"use strict"
const express=require('express');
const app=express();
const multer=require('multer');
const path=require('path');
const upload = multer({ dest: 'uploads/' });
//Routing
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});
app.get('/public/:resource',(req,res)=>{
    res.sendFile(path.join(__dirname,"public",req.params.resource));
});
app.post('/get-file-size',upload.single('file'),(req,res,next)=>{
    res.send({
        "size":req.file.size
    });
});
app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("Server started at port 3000");
})