let h2 = document.querySelector("h2")
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")

let bulb = document.querySelector("#bulb")
let onoff = document.querySelector(".onoff")

let a = 0;

inc.addEventListener('click', function(){
    h2.innerHTML = a++
})

dec.addEventListener('click', function(){
    h2.innerHTML = a--
})


let check = 0;

onoff.addEventListener('click', function(){
    if(check == 0){
        bulb.style.backgroundColor = "white";
        onoff.innerHTML = "OFF";
        check = 1 ;
    }else{
        bulb.style.backgroundColor = "transparent";
        onoff.innerHTML = "ON";
        check = 0;
    }
})


