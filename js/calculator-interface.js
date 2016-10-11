var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var calculatorFirst = parseInt($('#calculatorFirst').val());
    var calculatorSecond = parseInt($('#calculatorSecond').val());
    var calculatorType = $("input:radio[name='calculatorType']:checked").val();
    var simpleCalculator = new Calculator("hot pink");
    var calculatorOutput = simpleCalculator.calculator(calculatorFirst, calculatorType, calculatorSecond);
    $('#solution').prepend("<p>" + calculatorOutput + "</p>");
  });
});
