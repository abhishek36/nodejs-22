var mongoose = require("mongoose");

//Replica of database
//We are creating collection as we are doing in mongodb
const Department = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Department", Department);
