function findUserById(users, id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id ) { // find the bug
      return users[i];
    }
  }
  return null;
}

let users = [{ id: 1, name: "Sam" }, { id: 2, name: "Rafi" }];
console.log(findUserById(users, 2)); // Expected: { id: 2, name: "Rafi" }