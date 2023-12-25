let object = {
  name: "Eswar",
  city: "Jaggayyapet",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};
let object2 = {
  name: "sunitha",
};

// Never do this
object2.__proto__ = object;
