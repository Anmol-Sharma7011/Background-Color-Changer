let buttons = document.querySelectorAll(".button");
console.log(buttons);
let body = document.querySelector("body");
buttons.forEach( (btn) => {
    console.log(btn);
    btn.addEventListener('click', (event) =>{
        console.log(event.target);
        if(event.target.id ==="grey"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id ==="red"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id ==="blue"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id ==="yellow"){
            body.style.backgroundColor = event.target.id;
        }
    })
})
