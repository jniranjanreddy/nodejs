const express = require("express");
const app = express();

app.get("/", function(request, response){
   response.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function(request, response){
    response.send("<h1>Contact me at nirulabs.com!!</h1>");
 });
 app.get("/about", function(request, response){
    response.send("<h1>This site is owned by: nirulabs.com!!</h1>");
 });
app.listen(3000, function(){
  console.log("server started on port 3000");
});
