function function2() {
  let obj;
  console.log(obj.user);
}

function function1() {
  function2();
}

function1();