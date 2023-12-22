const numberInput = document.getElementById('number')
    textInput = document.getElementById('msg'),
    button = document.getElementById('button'),
    response = document.querySelector('.response');

    button.addEventListener('click', send, false)
function send(){
    const number = numberInput.value.replace(/\D/g,'')
    const text = textInput.value
    fetch('/',{
        method : 'post',
        headers:{ 'Content-type' : 'appication/json'},
        body : JSON.stringify({number:number, text:text})
    })
    .then((res)=>{console.log(res)})
    .then((err)=>{console.log(err)})
}
