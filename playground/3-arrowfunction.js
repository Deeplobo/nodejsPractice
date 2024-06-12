// The defer function takes two arguments: a function `f` and a delay time in milliseconds `ms`.
function defer(f, ms) {
  // It returns a new function that, when called, will execute the original function `f` after a delay of `ms` milliseconds.
  return function () {
    // Use setTimeout to delay the execution of `f`.
    // `setTimeout` will call the provided function (first argument) after the specified delay (second argument).
    // `apply` is used to call `f` with `this` set to the current `this` context and the arguments passed to the deferred function.
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

// Define a function `sayHi` that takes one argument `who`.
function sayHi(who) {
  // This function shows an alert with a greeting message.
  alert("Hello, " + who);
}

// Create a new function `sayHiDeferred` by calling `defer` with `sayHi` and a delay of 2000 milliseconds (2 seconds).
let sayHiDeferred = defer(sayHi, 2000);

// Call `sayHiDeferred` with the argument "John".
// This will schedule `sayHi` to be called with the argument "John" after a delay of 2000 milliseconds (2 seconds).
sayHiDeferred("deep");
