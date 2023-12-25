// import ReactDom from "react-dom/client";

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);

// Part Two
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a " + this.brand + " car";
  }
}
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + " and it's model is " + this.model;
  }
}
const myCar = new Model("Ford", "GTR");
console.log(myCar.show());
