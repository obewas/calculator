//To calculate BMI, Weight / (height) ** 2
var bmi = function(weight, height){
    return weight / (height ** 2);
    }
    var weight = parseFloat(prompt("Enter your weight in kg:"));
    var height = parseFloat(prompt("Enter yor height in m:"))
    var result = bmi(weight, height)
    alert(result.toFixed(2))
    