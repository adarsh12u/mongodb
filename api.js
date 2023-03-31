const express = require('express');
const dbconnect = require('./mongodb');
const app = express();
app.get('/',async (request,response)=>{
    let data =await dbconnect();
    data =await data.find().toArray();
          response.send(data)
          console.log(data)
})

app.listen(5000);