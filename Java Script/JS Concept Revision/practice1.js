// Closures
// A fuction along with lexical scope forms a closure.

function x(){
    let a = 19;
    function y(){
        console.log(a)
    }
    a=12
    return y
}
let z = x()
console.log(z)
z()