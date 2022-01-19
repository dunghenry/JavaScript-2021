$(function () {
  var employeeJson = {
    firstName: "Tedu",
    lastName: "App",
    email: "trandungksnb00@gmail.com",
    age: 20,
  };
  alert($("#result").html("firstName:" + employeeJson.firstName));
  // Mảng json
  var EmployeeJson = [
    {
      firstName: "Tedu",
      lastName: "App",
      email: "trandungksnb00@gmail.com",
      age: 20,
    },
    {
      firstName: "John",
      lastName: "Ab",
      email: "john@gmail.com",
      age: 30,
    },
  ];
  var result = "";
  $.each($(EmployeeJson), function (i, item) {
    result += "firstName: " + item.firstName;
  });

  // $('#result').html("firstName:" + EmployeeJson[1].firstName)
  $("#result").html(JSON.stringify(EmployeeJson));
  var content = $("#result").html();

  var Object = JSON.parse(content);
  console.log(Object);
});
