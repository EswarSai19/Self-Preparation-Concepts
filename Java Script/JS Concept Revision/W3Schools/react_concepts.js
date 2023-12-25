hello = function () {
  return "Hello";
};
hello3 = () => {
  return "hello";
};
hello2 = (val) => "Hello " + val;
// console.log(hello());
// console.log(hello3());
// console.log(hello2("Esu"));

// Modules
// Two types of modules => import & export
export const name = "Eswar";
export const age = 20;
const message = () => {
  const name = "Eswar";
  const job = "Senior Developer";
  return name + " is a " + job;
};
export default message();
