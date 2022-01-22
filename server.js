const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/CompanyDB")
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Unable to connect database");
  });

const departmentRoute = require("./src/routes/department.routes");
app.use("/department", departmentRoute);

const port = 8000;
app.listen(port, () => {
  console.log("Server is running on port ", port);
});
