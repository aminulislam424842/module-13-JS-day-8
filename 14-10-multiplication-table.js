function multiplicationTable(num) {
  let table = [];

  for (let i = 1; i <= 5; i++) { // find the bug
    table.push(num * i);
  }

  return table;
}

console.log(multiplicationTable(3)); 