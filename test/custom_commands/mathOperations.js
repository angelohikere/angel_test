/**
 This custom commands allows to perform all the various math operations and check that the results are correct in each case
 */
exports.command = function(first_number, operator, second_number, callback) {
  var self = this;

    switch(operator) {
      case "+":
        res = first_number + second_number
        console.log("The addition of", first_number,"and", second_number,"is:", res)
        break;
      case "-":
        res = first_number - second_number;
        console.log("The substraction of", first_number,"and", second_number,"is:", res)
        break;
      case "*":
        res = first_number * second_number;
        console.log("The multiplication of", first_number,"and", second_number,"is:", res)
        break;
      case "/":
        res = first_number / second_number;
        console.log("The division of", first_number,"and", second_number,"is:", res)
        break;
      case "%":
        res = first_number % second_number
        console.log("The modulo of", first_number,"and", second_number,"is:", res)
        break;
      default:
        return console.log('Sorry this operation is not recognized.')
        
    };

  if (typeof callback === "function") {
    callback.call(self, res);
  }

  return this;
};