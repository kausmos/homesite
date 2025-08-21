const express = require("express");
const app =express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get('/',function(req,res) {
  res.render('index.ejs');
});
app.get('/contact',function(req,res) {
  res.render('contact.ejs');
});
app.get('/onside',function(req,res) {
  res.render('onside.ejs');
});
app.get('/skills',function(req,res) {
  res.render('skills.ejs');
});
app.get('/about',function(req,res) {
  res.render('about.ejs');
});



app.listen(process.env.PORT=8080, process.env.IP, function(req,res){
  console.log('listening on'+process.env.PORT);
});