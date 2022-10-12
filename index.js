/* take a callback function as argument
call the callback function
doesnt matter the return as long as it calls the callback*/

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return receivesAFunction;
}

function returnsAnAnonymousFunction() {
  return function () {

  }
}



