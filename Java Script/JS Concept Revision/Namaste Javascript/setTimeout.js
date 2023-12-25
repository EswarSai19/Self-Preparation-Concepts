// If use let in the for the loop it is taken as block scope and everytime the setTimeout calls 
// it creates a new value with in the function as setTimeout.

function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function y(){
            console.log(i)
        },i*1000)
    }
        console.log("I am coming here")
}
x()

// If we need to do this using var only -> we need to create another closure by passing new value everytime

function x2(){
    for(var j=1; j<=5; j++){
        function y2(x){
            setTimeout(function z(){
                console.log(x)
            },x*1000)
        }
        y2(j)
    }
    console.log("I am coming from  2nd function")
}
x2();