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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});
