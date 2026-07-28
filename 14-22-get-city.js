function getCity(user) {
  return user.address.city; 
}

let user = { name: "Sam", address: { city: "Dhaka", zip: "1200" } };
console.log(getCity(user)); 