// const config = require('./config/config.js');
const express = require("express");
const path = require("path");
const cors = require("cors");
const mysql = require("mysql");
const PORT =  process.env.PORT || 3001 ;
// const connection = mysql.createConnection(config.databaseCred);

const app = express();

const SELECT_ALL_CUSTOMERS_QUERY = "SELECT * FROM customers";

// connection.connect(err => {
//   if (err) throw err;
// });


app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));


app.get("/customers", (req, res) => {
  // connection.query(SELECT_ALL_CUSTOMERS_QUERY, (err, results) => {
  //   err ? res.send(err) : res.json({
  //     customers: results
  //   });
  // });
  return res.json({
    ok: true,
    customers: [{
      id: 1,
      first_name: 'Abhishek',
      gender: 'Male'
    },{
      id: 2,
      first_name: 'Ritesh',
      gender: 'Male'
    },{
      id: 3,
      first_name: 'Rinku',
      gender: 'Female'
    },{
      id: 4,
      first_name: 'Ramesh',
      gender: 'Male'
    },{
      id: 5,
      first_name: 'Priya',
      gender: 'Female'
    }]
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
