function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output=[];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.calculator = function(calculatorFirst, calculatorType, calculatorSecond) {
  var calculatorOutput;
  if (calculatorType === "subtract") {
    calculatorOutput = calculatorFirst - calculatorSecond;
  } else if (calculatorType === "divide") {
    calculatorOutput = calculatorFirst / calculatorSecond;
  } else if (calculatorType === "multiply") {
    calculatorOutput = calculatorFirst * calculatorSecond;
  } else if (calculatorType === "addition") {
    calculatorOutput = calculatorFirst + calculatorSecond;
  }
  return calculatorOutput;
};

exports.calculatorModule = Calculator;
