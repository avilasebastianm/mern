const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cities = require('./routes/api/cities')

//db config
const db = require("./config/keys.js").mongoURI;
//connect to mongo
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected..."))
  .catch(err => console.log(err));
//user routes
app.use('/api/cities', city)


//bodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test/", function (req, res) {
  res.send("Hello Worldss");
});

app.listen(port, () => console.log(`server Started on port ${port}`));
