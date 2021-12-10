const express = require("express");
const app = express();

app.get("/", function(request, response){
   response.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me at nirulabs.com");
 });
 app.get("/about", function(request, response){
    response.send("This site is owned by: nirulabs.com");
 });
app.listen(3000, function(){
  console.log("server started on port 3000");
});