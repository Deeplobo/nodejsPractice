const fs = require("fs");
const jasonData = fs.readFileSync("./1-jason.json").toString("utf-8");
const data = JSON.parse(jasonData);
console.log(data.name);
const newObject = {
  ...data,
  name: "Deep",
  age: "10",
};
const newJsonData = JSON.stringify(newObject);
console.log(newJsonData);
const writeFile = fs.writeFileSync("./1-jason.json", newJsonData);
