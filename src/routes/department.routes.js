const departmentController = require("../controller/department.controller");

module.exports = (app) => {
  app.post("/add", departmentController.addDepartment);

  //   app.get("/get", departmentController.addDepartment);

  //   app.get("/get/:id", departmentController.addDepartment);

  //   app.update("/update/:id", departmentController.addDepartment);

  //   app.delete("/delete/:id", departmentController.addDepartment);
};
