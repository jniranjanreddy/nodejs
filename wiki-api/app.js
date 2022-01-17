const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://192.168.9.100:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function(req, res){
  Article.find(function(err, foundArticles){
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
    //console.log(foundArticles);
    //res.send(foundArticles)
  });
});
app.post("/articles", function(req, res){
  console.log(req.body.title);
  console.log(req.body.content);

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content

  });
newArticle.save();
});


app.delete("/articles", function(req, res){
  Article.deleteMany(function(err){
    if (!err){
      res.send("Successfully deleted all the articles in wikiDB.");
    } else {
      res.send(err);
    }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
  
});
