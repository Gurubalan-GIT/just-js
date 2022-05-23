let object = {
  name: "John",
  age: 30,
  address: {
    personal: {
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
    },
    office: {
      street: "321 Office St",
      city: "Anytown",
      state: "NY",
      zip: "11111",
      location: {
        lat: "40.7128",
        lng: "-74.0060",
      },
    },
  },
};

// aim is to flatten the object with keys as the path ( Example : { address_personal_street : '123 Main St' } )
console.log("Original Object : ", object);

let result = {};
function flattenObject(obj, parent = "") {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenObject(obj[key], parent + "_" + key);
    } else {
      result[parent + "_" + key] = obj[key];
    }
  }
  return result;
}

console.log("Flattened Object : ", flattenObject(object, "object"));
