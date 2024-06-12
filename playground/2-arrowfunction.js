const dataBase = {
  name: "some text",
  list: ["Deep", "keep", "color"],
  getGuestList: function () {
    const nwList = ["color", "keep", "Deep"];
    this.list.forEach(() => {
      anotherFunction(this.name);
    });
  },
};
const anotherFunction = (arg) => {
  console.log(arg);
};
dataBase.getGuestList();
