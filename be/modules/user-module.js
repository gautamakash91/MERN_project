module.exports = function (database) {
  var user_module = {

    add_employee_function: function (employee, callBack) {
      database.db().collection("employees").insertOne(employee, function (err, doc) {
        if (err) {
          callBack(true, "error occured")
        } else {
          callBack(false, "Data inserted");
        }
      })
    },

    get_employees_function: function (skip, limit, callBack) {
      var cursor = database.db().collection("employees").find({}).skip(skip).limit(limit);
      var employees = [];
      cursor.forEach(function (doc, err) {
        if (!err) {
          employees.push(doc);
        }
      }, function () {
        if (employees.length == 0) {
          callBack(true, "no data available", null);
        } else {
          callBack(false, "data found", employees);
        }
      })
    }

  };
  return user_module;
};