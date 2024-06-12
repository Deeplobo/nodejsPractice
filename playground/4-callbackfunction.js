let bm = ["jk", "kk", "js"];
/**
 * @description the function in the filter method "call" is a call back function
 */
let total = bm.filter(call);
function call(a) {
  console.log(a);
}
console.log(total);

function add(a, b, call) {
  let timer = setTimeout(fun, 2000);
  function fun() {
    let sum = a + b;
    clearTimeout(timer);
    return call(sum);
  }
}

add(5, 5, (arg) => console.log(arg));
