let box = document.querySelector("#box");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2")
let main = document.querySelector("main");


let arr = [{
    team: "KKR",
    primery: "purple",
    secondery: "gold",
    fullname: "KOLKATA KNIGHT RIDERS",
    caiptan: "Ajinkya Rahane",
},
{
    team: "RCB",
    primery: "red",
    secondery: "black",
    fullname: "ROYAL CHALLENGERS",
    caiptan: "Rajat Patidar",
},
{
    team: "MI",
    primery: "royalblue",
    secondery: "gold",
    fullname: "MUMBAI INDIANS",
    caiptan: "Hardik Pandya",
},
{
    team: "RR",
    primery: "pink",
    secondery: "darkblue",
    fullname: "RAJSTSTHAN ROYALS",
    caiptan: "Sanju Samson",

},
{
    team: "CSK",
    primery: "yellow",
    secondery: "blue",
    fullname: "CHENNAI SUPER KINGS",
    caiptan: "MSD",

},
{
    team: "SRH",
    primery: "Orange",
    secondery: "black",
    fullname: "SUNRISERS HAIDRABAD",
    caiptan: "Pat Cummins",

},
{
    team: "DC",
    primery: "blue",
    secondery: "red",
    fullname: "DELHI CAPITALS",
    caiptan: "Axer Patel",

},
{
    team: "PBKS",
    primery: "red",
    secondery: "silver",
    fullname: "PANJAB KINGS",
    caiptan: "Shreyash Iyer",

},
{
    team: "PBKS",
    primery: "red",
    secondery: "silver",
    fullname: "PANJAB KINGS",
    caiptan: "Shreyash Iyer",

},
{
    team: "GT",
    primery: "navy",
    secondery: "blue",
    fullname: "GUJRAT TITAN",
    caiptan: "Shubhman Gill",

},
{
    team: "LSG",
    primery: "lightblue",
    secondery: "orange",
    fullname: "Lakhnow Supar Giants",
    caiptan: "Rishabh Pant",

},

]

btn.addEventListener('click', function () {

    let r = arr[Math.floor(Math.random() * arr.length)];
    h1.innerHTML = `Team:${r.team}`;
    h2.innerHTML = `Caiptan:${r.caiptan}`;
    box.style.backgroundColor = r.primery;
    main.style.backgroundColor =  r.secondery;


})
