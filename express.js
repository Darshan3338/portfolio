const express = require("express");
const app=express();
const port=8500;
app.listen(port,(err)=>{
    if(err) throw err;
    console.log("server is running on" + port);
})