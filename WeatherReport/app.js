const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=7d95da8f2de8fdeb18b026c22acbf715&units=metric";
    https.get(url, function(response){
      console.log(response.statusCode);

      response.on("data", function(data){
       const weatherData = JSON.parse(data)
       //console.log(weatherData);
       const temp = weatherData.main.temp;
       const weatherDes = weatherData.weather[0].description
       res.write("<p>The Weather Tempareture is:" + weatherDes + "</p>")
       res.write("<h1>The temperature in London is:" + temp + "</h1>")
       res.send
      });
    });
});

    app.listen(3000, function(){
        console.log("server started on port 3000");
      });