module.exports = {
  configure: function (app, database) {
    var user_module = require("../modules/user-module")(database);

    //API TO ADD EMPLOYEE
    app.post("/add_employee", function (req, res) {
      var employee = {
        name: req.body.name,
        email: req.body.email,
        joining_date: req.body.joining_date,
        phone: req.body.phone
      }

      user_module.add_employee_function(employee, function (error, message) {
        if (error) {
          res.json({ status: false, result: message })
        } else {
          res.json({ status: true, result: message })
        }
      });

    })


    app.get("/get_employees", function (req, res) {
      var skip = parseInt(req.body.skip);
      var limit = parseInt(req.body.limit);
      user_module.get_employees_function(skip, limit, function (error, message, data) {
        if (error) {
          res.json({ status: false, result: message })
        } else {
          res.json({ status: true, result: data })
        }
      });
    })
  }
}