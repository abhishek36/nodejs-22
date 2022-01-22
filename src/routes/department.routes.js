const departmentController = require("../controller/department.controller");
const router = require("express").Router();

router.post("/add", departmentController.addDepartment);

module.exports = router;
