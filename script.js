let container = document.querySelector(".container");

let input = container.querySelector("input");
let buttonGet = container.querySelector("button");

let show_qr = container.querySelector('.show_qr');
let img = show_qr.querySelector('img');

buttonGet.addEventListener('click', ()=>{
    let realData = input.value.trim();
    buttonGet.innerText = "generating QR Code";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${realData}`;
    img.addEventListener('load', ()=>{
        show_qr.classList.add('slider');
        buttonGet.innerText = "generate QR Code"
    })
});

input.addEventListener('keyup', ()=>{
    if(!input.value.trim()){
        show_qr.classList.remove('slider');
    }
})

