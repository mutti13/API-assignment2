const { raw } = require('express');
const express = require('express')
const app = express()
app.use(express.json()); //middleware
const mob = ["LG", "samsung" , "apple",'Motorolla'];
app.get('/', function (req, res) {
  res.send('Hello World dn')
}) 

//.get method has 2 parameter,  first is url, second is funcion with req n res
app.get("/api/mob", function(req,res){
    res.send(mob);
})

// to get some specific product
app.get("/api/mob/:index", function(req,res){
    if(! mob[req.params.index])
    return res.status(400).send('Mobile not found');

    res.send(mob[req.params.index]);
})

// to update some specific product
app.put("/api/mob/:index", function(req,res){
    // console.log(req.body);
    mob[req.params.index] = req.body.name;
    res.send(mob[req.params.index]);
});

//add an item
app.post("/api/mob", function(req,res){
   
    mob.push( req.body.name);
    res.send(mob);   
});

app.listen(3000); 